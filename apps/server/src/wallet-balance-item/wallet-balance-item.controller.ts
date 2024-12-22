import { Controller, Post, Body } from '@nestjs/common';
import { WalletBalanceItemService } from './wallet-balance-item.service';
import { CreateBalanceItemDto } from './dto/create-wallet-balance-item.dto';

@Controller('balance-item')
export class WalletBalanceItemController {
  constructor(private readonly balanceItemService: WalletBalanceItemService) {}

  @Post()
  createBalanceItem(@Body() createWalletBalanceItemDto: CreateBalanceItemDto) {
    return this.balanceItemService.createBalanceItem(createWalletBalanceItemDto);
  }
}
