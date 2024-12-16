import { WalletBalance } from './WalletBalance';
import { WalletList } from './WalletList';
import { VStack } from '@/shared/ui/Stack';

const list = [
    {
        id: 121,
        currency: 'BTC',
        iconUrl: '',
        symbol: 'BTC',
        value: 12,
    },
    {
        id: 1211,
        currency: 'ETH',
        iconUrl: '',
        symbol: 'ETH',
        value: 1112,
    },
];

export const Wallet = () => {
    return (
        <VStack className="gap-4">
            <WalletBalance />
            <WalletList walletCoins={list} />
        </VStack>
    );
};
