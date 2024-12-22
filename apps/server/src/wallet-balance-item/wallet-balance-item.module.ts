import { Module } from '@nestjs/common';
import { WalletBalanceItemService } from './wallet-balance-item.service';
import { WalletBalanceItemController } from './wallet-balance-item.controller';

@Module({
  controllers: [WalletBalanceItemController],
  providers: [WalletBalanceItemService],
})
export class WalletBalanceItemModule {}
