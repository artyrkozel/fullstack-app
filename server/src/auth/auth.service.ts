import { ConflictException, ForbiddenException, Injectable, Logger, UnauthorizedException } from '@nestjs/common';
import { compareSync } from 'bcrypt';
import { RegisterDto } from './dto/register.dto';
import { UserService } from 'src/user/user.service';
import { Token, User } from '@prisma/client';
import { LoginDto } from './dto/login.dto';
import { Tokens } from './interface';
import { JwtService } from '@nestjs/jwt';
import { PrismaService } from 'src/prisma/prisma.service';
import { v4 } from 'uuid';
import { add } from 'date-fns';
import { JwtPayload } from 'jsonwebtoken';
import { ApiOkResponse } from '@nestjs/swagger';

@Injectable()
export class AuthService {
    private readonly logger = new Logger(AuthService.name);
    constructor(
        private userService: UserService,
        private jwtService: JwtService,
        private prismaService: PrismaService,
    ) {}

    async register(registerDto: RegisterDto) {
        const user: User = await this.userService.findOne(registerDto.email).catch((err) => {
            this.logger.error(err);
            return null;
        });

        if (user) {
            throw new ConflictException('User already registered');
        }

        return this.userService.create(registerDto).catch((err) => {
            this.logger.error(err);
            return null;
        });
    }

    async login(loginDto: LoginDto, agent: string): Promise<{tokens: Tokens, user: User}> {
        const user: User = await this.userService.findOne(loginDto.email).catch((err) => {
            this.logger.error(err);
            return null;
        });

        if (!user || !compareSync(loginDto.password, user.password)) {
            throw new UnauthorizedException('No valid login or password');
        }

        const tokens =  await this.generateTokens(user, agent);
        
        return { tokens, user };
    }

    async verifyToken(token: string) {
        try {
            const decodedToken = await this.jwtService.verifyAsync<Token>(token, { secret: process.env.JWT_SECRET });
            return decodedToken;
        } catch(e){
            throw new UnauthorizedException('Invalid token');
        }
    }

    async refreshTokens(refreshToken: string, agent: string): Promise<{tokens: Tokens, user: User}> {
        const token = await this.prismaService.token.findUnique({ where: { token: refreshToken } });

        if (!token) {
            throw new UnauthorizedException();
        }

        await this.prismaService.token.delete({ where: { token: refreshToken } });
        if (new Date(token.exp) < new Date()) {
            throw new UnauthorizedException();
        }

        const user = await this.userService.findOne(token.userId);
        
        const tokens = await this.generateTokens(user, agent);

        return { tokens, user };
    }

    private async generateTokens(user: User, agent: string): Promise<Tokens> {
        const accessToken = await this.jwtService.signAsync({
                id: user.id,
                email: user.email,
                role: user.roles,
            }, { expiresIn: '20s', secret: process.env.JWT_SECRET });

        const accessTokenRes = 'Bearer ' + accessToken;

        const refreshToken = await this.getRefreshToken(user.id, agent);

        return { accessToken: accessTokenRes, refreshToken };
    }

    private async getRefreshToken(userId: string, agent: string): Promise<Token> {
        const _token = await this.prismaService.token.findFirst({ where: { userId, userAgent: agent } });
        const token = _token?.token ?? '';
        return this.prismaService.token.upsert({
            where: { token },
            update: {
                token: v4(),
                exp: add(new Date(), { months: 1 }),
            },
            create: {
                token: v4(),
                exp: add(new Date(), { months: 1 }),
                userId,
                userAgent: agent,
            },
        });
    }

    deleteRefreshToken(token: string): Promise<Token> {
        return this.prismaService.token.delete({ where: { token } });
    }

    async verifyPaload(payload: JwtPayload): Promise<boolean>{
        if (!payload.id || !payload.exp) {
            throw new UnauthorizedException('invalid credentials');
        }

        const user: User = await this.userService.findOne(payload.id).catch((err) => {
            this.logger.error(err);
            return null;
        });

        if (!user) {
            throw new ForbiddenException('user not found');
        }

        return true;
    }

}
