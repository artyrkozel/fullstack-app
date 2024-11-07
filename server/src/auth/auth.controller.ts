import { Controller, Get, Post, Body, UnauthorizedException, Res, HttpStatus } from '@nestjs/common';
import { AuthService } from './auth.service';
import { RegisterDto } from './dto/register.dto';
import { LoginDto } from './dto/login.dto';
import { Tokens } from './interface';
import { Response } from 'express';
import { ConfigService } from '@nestjs/config';
import { Cookie, UserAgent } from '@common/decorators';

const REFRESH_TOKEN = 'refreshToken';

@Controller('auth')
export class AuthController {
    constructor(
        private readonly authService: AuthService,
        private readonly configService: ConfigService,
    ) {}

    @Post('register')
    register(@Body() createAuthDto: RegisterDto) {
        return this.authService.register(createAuthDto);
    }

    @Post('login')
    async login(@Body() loginDto: LoginDto, @Res() response: Response, @UserAgent() userAgent: string) {
        const tokens = await this.authService.login(loginDto, userAgent);
        if (!tokens) {
            throw new UnauthorizedException('Invalid credentials');
        }
        this.setRefreshTokenToCookies(tokens, response);
    }

    @Get('refresh-tokens')
    async refreshTokens(
        @Cookie(REFRESH_TOKEN) refreshToken: string,
        @Res() response: Response,
        @UserAgent() userAgent: string,
    ) {
        if (!refreshToken) {
            throw new UnauthorizedException();
        }
        const tokens = await this.authService.refreshTokens(refreshToken, userAgent);

        if (!tokens) {
            throw new UnauthorizedException();
        }

        this.setRefreshTokenToCookies(tokens, response);
    }

    private setRefreshTokenToCookies = (tokens: Tokens, res: Response) => {
        if (!tokens) {
            throw new UnauthorizedException();
        }
        res.cookie(REFRESH_TOKEN, tokens.refreshToken.token, {
            httpOnly: true,
            sameSite: 'lax',
            expires: new Date(tokens.refreshToken.exp),
            secure: this.configService.get('NODE_ENV', 'development') === 'production',
            path: '/',
        });
        res.status(HttpStatus.CREATED).json({ accessToken: tokens.accessToken });
    };
}
