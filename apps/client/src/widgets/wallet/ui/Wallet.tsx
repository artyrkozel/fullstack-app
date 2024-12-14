import { VStack } from '@/shared/ui/Stack';
import { WalletBalance } from './WalletBalance';
import { WalletList } from './WalletList';

export const Wallet = () => {
    return (
        <VStack gap='2'>
            <WalletBalance />
            <WalletList walletCoins={[]} />
        </VStack>
    );
};
