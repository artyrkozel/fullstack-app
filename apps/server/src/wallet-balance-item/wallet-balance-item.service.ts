import { BadRequestException, Injectable } from '@nestjs/common';
import { WalletBalanceItem } from '@prisma/client';

import { CreateBalanceItemDto } from './dto/create-wallet-balance-item.dto';

import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class WalletBalanceItemService {
    constructor(private readonly prismaService: PrismaService) {}

    async createBalanceItem(balanceItemDto: CreateBalanceItemDto): Promise<WalletBalanceItem> {
        const existingBalanceItem = await this.prismaService.walletBalanceItem.findUnique({
            where: {
                walletId_currency: {
                    walletId: balanceItemDto.walletId,
                    currency: balanceItemDto.currency,
                },
            },
        });

        if (existingBalanceItem) {
            throw new BadRequestException('Balance with such currency already exists for this wallet.');
        }

        return await this.prismaService.walletBalanceItem.create({
            data: {
                currency: balanceItemDto.currency,
                walletId: balanceItemDto.walletId,
                iconUrl: balanceItemDto.iconUrl,
                symbol: balanceItemDto.symbol,
                balance: balanceItemDto.balance,
            },
        });
    }
}
