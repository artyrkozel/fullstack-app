import { PartialType } from '@nestjs/swagger';

import { CreateBalanceItemDto } from './create-wallet-balance-item.dto';

export class UpdateWalletBalanceItemDto extends PartialType(CreateBalanceItemDto) {}
