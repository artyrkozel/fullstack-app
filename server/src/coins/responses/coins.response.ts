import { ApiProperty } from "@nestjs/swagger";
import { Coin } from "../interfaces/coin-list.interface";

export class CoinResponse implements Coin {
    @ApiProperty()
    uuid: string;

    @ApiProperty()
    symbol: string;

    @ApiProperty()
    name: string;

    @ApiProperty()
    color: string;

    @ApiProperty()
    iconUrl: string;

    @ApiProperty()
    marketCap: string;

    @ApiProperty()
    price: string;

    @ApiProperty()
    listedAt: number;

    @ApiProperty()
    change: string;

    @ApiProperty()
    rank: number;

    @ApiProperty()
    sparkline: string[];

    @ApiProperty()
    lowVolume: boolean;

    @ApiProperty()
    coinrankingUrl: string;

    @ApiProperty()
    "24hVolume": string;

    @ApiProperty()
    btcPrice: string;

    @ApiProperty()
    contractAddresses: string[];

    constructor(coin: Coin) {
        Object.assign(this, coin);
    }
}