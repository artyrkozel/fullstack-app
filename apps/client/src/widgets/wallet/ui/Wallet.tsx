import { WalletBalance } from './WalletBalance';
import { WalletList } from './WalletList';
import { VStack } from '@/shared/ui/Stack';

const list = [
    {
        id: 121,
        сurrency: 'BTC',
        iconUrl: 'https://cdn.coinranking.com/bOabBYkcX/bitcoin_btc.svg',
        symbol: 'BTC',
        value: 12,
    },
    {
        id: 1211,
        сurrency: 'ETH',
        iconUrl: 'https://cdn.coinranking.com/bOabBYkcX/bitcoin_btc.svg',
        symbol: 'ETH',
        value: 1112,
    },
    {
        id: 121,
        сurrency: 'BTC',
        iconUrl: 'https://cdn.coinranking.com/bOabBYkcX/bitcoin_btc.svg',
        symbol: 'BTC',
        value: 12,
    },
    {
        id: 1211,
        сurrency: 'ETH',
        iconUrl: 'https://cdn.coinranking.com/bOabBYkcX/bitcoin_btc.svg',
        symbol: 'ETH',
        value: 1112,
    },
    {
        id: 121,
        сurrency: 'BTC',
        iconUrl: 'https://cdn.coinranking.com/bOabBYkcX/bitcoin_btc.svg',
        symbol: 'BTC',
        value: 12,
    },
    {
        id: 1211,
        сurrency: 'ETH',
        iconUrl: 'https://cdn.coinranking.com/bOabBYkcX/bitcoin_btc.svg',
        symbol: 'ETH',
        value: 1112,
    },
];

export const Wallet = () => {
    return (
        <VStack className="gap-4">
            <WalletBalance />
            <WalletList className="h-[405px] overflow-y-auto scrollbar-none" walletCoins={list} />
        </VStack>
    );
};
