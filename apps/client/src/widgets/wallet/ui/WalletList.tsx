import { FC } from 'react';
import { cn } from '@/shared/lib/cn';
import { Text, TextAlign } from '@/shared/ui/Text/Text';

interface IWalletListProps {
    className?: string;
    walletCoins: any;
}

export const WalletList: FC<IWalletListProps> = ({ className, walletCoins }) => {
    if (!walletCoins.length) {
        return <Text className="border-ligth p-4" text="No data" align={TextAlign.CENTER} />;
    }

    return (
        <div className={cn('border border-border-ligth rounded-lg', {}, [className])}>
            {/* {walletCoins.map((el: any) => (
        <WalletItem key={el.name} walletData={el} />
      ))} */}
      <div>dfdfdf</div>
        </div>
    );
};
