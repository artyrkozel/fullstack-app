import { HttpService } from '@nestjs/axios';
import { BadRequestException, Injectable } from '@nestjs/common';
import { CoinListResponse, CoinResponse } from './interfaces/coin-list.interface';

@Injectable()
export class ConinsService {
    constructor(private readonly httpService: HttpService) {}

    async getCoinsList(limit: number, page: number) {
        const offset = (page - 1) * limit;
        const coinsList = await this.httpService.axiosRef.get<CoinListResponse>(`coins?limit=${limit}&offset=${offset}`).then(res => res.data.data);

        if (!coinsList) {
            throw new BadRequestException('coins list error');
        }
        const pageCount = Math.round(coinsList.stats.total / limit)
        const rowCount = coinsList.stats.total;

        return {
            elements: coinsList.coins,
            pageCount,
            rowCount
        };
    }

    async getCoinById(coinId: string) {
        const coinData = await this.httpService.axiosRef.get<CoinResponse>(`coin/${coinId}`).then(res => res.data);

        if (!coinData) {
            throw new BadRequestException('coin by id error');
        }

        return coinData.data.coin
    }
}
