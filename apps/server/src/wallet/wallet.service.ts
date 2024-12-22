import { BadRequestException, Injectable } from '@nestjs/common';

import { CreateWalletDto } from './dto/create-wallet.dto';

import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class WalletService {
    constructor(private readonly prismaService: PrismaService) {}

    async create(createWalletDto: CreateWalletDto) {
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

    async getWalletById(walletId: string) {
        const wallet = await this.prismaService.wallet.findUnique({
            where: { id: walletId },
            include: { balances: true },
        });

        if (!wallet) throw new BadRequestException('Can not find wallet with this user');

        return wallet;
    }

    async removeByWalletId(walletId: string) {
        return this.prismaService.wallet.delete({
            where: { id: walletId },
            select: { id: true },
        });
    }
}
