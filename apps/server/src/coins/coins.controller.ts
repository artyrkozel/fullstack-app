import { ClassSerializerInterceptor, Controller, Get, Param, Query, UseGuards, UseInterceptors } from '@nestjs/common';
import { ApiOkResponse } from '@nestjs/swagger';

import { ConinsService } from './coins.service';
import { CoinResponse } from './responses/coins.response';

import { JwtAuthGuard } from '@auth/guards/jwt-auth.guard';

@Controller('coins')
export class ConinsController {
    constructor(private readonly coninsService: ConinsService) {}

    @UseInterceptors(ClassSerializerInterceptor)
    @UseGuards(JwtAuthGuard)
    @Get('list')
    async getCoinsList(@Query('limit') limit: number = 20, @Query('page') page: number = 1) {
        const coinsList = await this.coninsService.getCoinsList(+limit, +page);
        return coinsList;
    }

    @ApiOkResponse({
        type: CoinResponse,
    })
    @UseGuards(JwtAuthGuard)
    @Get(':coinId')
    async getCoinBuId(@Param('coinId') coinId: string) {
        const coinsList = await this.coninsService.getCoinById(coinId);
        return coinsList;
    }
}
