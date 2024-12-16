export interface CryptoStats {
    total: number;
    totalCoins: number;
    totalMarkets: number;
    totalExchanges: number;
    totalMarketCap: string;
    total24hVolume: string;
}

export interface Coin {
    uuid: string;
    symbol: string;
    name: string;
    color: string;
    iconUrl: string;
    marketCap: string;
    price: string;
    listedAt: number;
    change: string;
    rank: number;
    sparkline: string[];
    lowVolume: boolean;
    coinrankingUrl: string;
    '24hVolume': string;
    btcPrice: string;
    contractAddresses: string[];
}

export interface CryptoData {
    stats: CryptoStats;
    coins: Coin[];
}

export interface CoinListResponse {
    status: string;
    data: CryptoData;
}

export interface CoinResponse {
    status: string;
    data: {
        coin: Coin;
    };
}
