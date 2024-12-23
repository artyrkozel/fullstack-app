import {
    Controller,
    Get,
    Post,
    Body,
    Param,
    Delete,
    UseInterceptors,
    ClassSerializerInterceptor,
    UseGuards,
} from '@nestjs/common';
import { ApiOkResponse } from '@nestjs/swagger';

import { CreateWalletDto } from './dto/create-wallet.dto';
import { WalletResponse } from './responses';
import { WalletService } from './wallet.service';

import { JwtAuthGuard } from '@auth/guards/jwt-auth.guard';

@Controller('wallet')
export class WalletController {
    constructor(private readonly walletService: WalletService) {}

    @UseInterceptors(ClassSerializerInterceptor)
    @UseGuards(JwtAuthGuard)
    @Post('create')
    createWallet(@Body() createWalletDto: CreateWalletDto) {
        return this.walletService.createWallet(createWalletDto);
    }

    @ApiOkResponse({
        type: WalletResponse,
    })
    @UseGuards(JwtAuthGuard)
    @Get(':walletId')
    getWalletById(@Param('walletId') walletId: string) {
        return this.walletService.getWalletById(walletId);
    }

    @UseGuards(JwtAuthGuard)
    @Delete(':walletId')
    remove(@Param('walletId') walletId: string) {
        return this.walletService.removeByWalletId(walletId);
    }
}
