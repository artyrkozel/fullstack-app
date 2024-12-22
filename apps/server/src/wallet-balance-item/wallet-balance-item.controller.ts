import { Controller, Post, Body } from '@nestjs/common';

import { CreateBalanceItemDto } from './dto/create-wallet-balance-item.dto';
import { WalletBalanceItemService } from './wallet-balance-item.service';

@Controller('balance-item')
export class WalletBalanceItemController {
    constructor(private readonly balanceItemService: WalletBalanceItemService) {}

    @Post()
    createBalanceItem(@Body() createWalletBalanceItemDto: CreateBalanceItemDto) {
        return this.balanceItemService.createBalanceItem(createWalletBalanceItemDto);
    }
}
