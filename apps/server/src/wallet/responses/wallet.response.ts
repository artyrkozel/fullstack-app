import { ApiProperty } from '@nestjs/swagger';
import { Wallet, WalletBalanceItem } from '@prisma/client';
import { Exclude } from 'class-transformer';

export class WalletResponse implements Wallet {
    @ApiProperty()
    id: string;

    @Exclude()
    userId: string;

    @Exclude()
    createdAt: Date;

    @ApiProperty()
    balances: WalletBalanceItem[];

    constructor(user) {
        Object.assign(this, user);
    }
}
