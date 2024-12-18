import Image from 'next/image';
import { FC } from 'react';
import { IWalletItem } from '../model/types';
import { cn } from '@/shared/lib/cn';
import { HStack, VStack } from '@/shared/ui/Stack';
import { Text, TextColor, TextSize } from '@/shared/ui/Text/Text';

interface IWalletListProps {
    className?: string;
    walletItem: IWalletItem;
}

export const WalletListItem: FC<IWalletListProps> = ({ className, walletItem }) => {
    return (
        <div className={cn('p-4 border border-border-ligth first:rounded-t-lg last:rounded-b-lg flex justify-between', {}, [className])}>
            <HStack>
                <div className="mr-2">
                    <Image src={walletItem.iconUrl} width={40} height={40} alt="iconUrl" />
                </div>
                <VStack className='gap-2'>
                    <Text
                        className="font-semibold"
                        size={TextSize.S}
                        color={TextColor.secondary}
                        text={String(walletItem.value)}
                    />
                    <Text
                        className="text-[#848484]"
                        size={TextSize.XS}
                        color={TextColor.secondary}
                        text={String(walletItem.symbol)}
                    />
                </VStack>
            </HStack>
            <VStack className='gap-2' justify="end" align="center">
                <Text
                    className="font-semibold"
                    size={TextSize.S}
                    color={TextColor.secondary}
                    text={String(walletItem.value)}
                />
                <Text
                    className="text-[#848484]"
                    size={TextSize.XS}
                    color={TextColor.secondary}
                    text={`${walletItem.value} USD`}
                />
            </VStack>
        </div>
    );
};
