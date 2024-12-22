import { BadRequestException, Injectable } from '@nestjs/common';

import { CreateWalletDto } from './dto/create-wallet.dto';

import { PrismaService } from 'src/prisma/prisma.service';
import { Wallet } from '@prisma/client';

@Injectable()
export class WalletService {
    constructor(private readonly prismaService: PrismaService) {}

    async createWallet(createWalletDto: CreateWalletDto): Promise<Wallet> {
        const isWalletExist = await this.prismaService.wallet.findFirst({ where: { userId: createWalletDto.userId } });

        if (isWalletExist) throw new BadRequestException('Wallet already exist');

        return await this.prismaService.wallet.create({
            data: {
                userId: createWalletDto.userId,
                balances: {
                    create: [],
                },
            },
        });
    }

    async getWalletById(userOrWalletId: string): Promise<Wallet> {
        const wallet = await this.prismaService.wallet.findFirst({
            where: {
                OR: [{ id: userOrWalletId }, { userId: userOrWalletId }],
            },
            include: {
                balances: true,
            },
        });

        if (!wallet) throw new BadRequestException('Can not find wallet with this user');

        return wallet;
    }

    async removeByWalletId(walletId: string): Promise<{ id: string }> {
        return this.prismaService.wallet.delete({
            where: { id: walletId },
            select: { id: true },
        });
    }
}
