import { FC } from 'react';
import { cn } from '@/shared/lib/cn';
import { Text, TextAlign } from '@/shared/ui/Text/Text';
import { IWalletItem } from '../model/types';
import { WalletListItem } from './WalletListItem';

interface IWalletListProps {
    className?: string;
    walletCoins: IWalletItem[];
}

export const WalletList: FC<IWalletListProps> = ({ className, walletCoins }) => {
    if (!walletCoins.length) {
        return <Text className="border-ligth p-4" text="No data" align={TextAlign.CENTER} />;
    }

    return (
        <div className={cn('first:rounded-r-lg', {}, [className])}>
            {walletCoins.map((el) => (
                <WalletListItem key={el.iconUrl} walletItem={el} />
            ))}
        </div>
    );
};
