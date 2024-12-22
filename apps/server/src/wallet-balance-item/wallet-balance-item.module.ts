import { Module } from '@nestjs/common';

import { WalletBalanceItemController } from './wallet-balance-item.controller';
import { WalletBalanceItemService } from './wallet-balance-item.service';

@Module({
    controllers: [WalletBalanceItemController],
    providers: [WalletBalanceItemService],
})
export class WalletBalanceItemModule {}
