import { BadRequestException, Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { genSaltSync, hashSync } from 'bcrypt';
import { User } from '@prisma/client';

@Injectable()
export class UserService {
    constructor(private readonly prismaService: PrismaService) {}

    async create(createUserDto: Partial<User>) {
        const isUserExist = await this.prismaService.user.findFirst({ where: { email: createUserDto.email } });

        if (isUserExist) {
            throw new BadRequestException('User already exists');
        }
        const hashedPassword = this.hashPassword(createUserDto.password);

        return await this.prismaService.user.create({
            data: {
                email: createUserDto.email,
                password: hashedPassword,
                roles: createUserDto.roles,
            },
        });
    }

    async findOne(idOrEmail: string) {
        const user = await this.prismaService.user.findFirst({
            where: {
                OR: [{ id: idOrEmail }, { email: idOrEmail }],
            },
        });

        if (!user) {
            throw new BadRequestException('User not found');
        }
        return user;
    }

    remove(id: string) {
        return this.prismaService.user.delete({
            where: { id },
        });
    }

    private hashPassword(password: string) {
        return hashSync(password, genSaltSync(10));
    }
}
