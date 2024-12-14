import { cn } from '@/shared/lib/cn';
import Image from 'next/image';
import { HStack, VStack } from '@/shared/ui/Stack';
import { TextSize, Text } from '@/shared/ui/Text/Text';
import Mask from '../../../../public/images/banner-mask.png';
import Vector from '../../../../public/images/vector.png';

interface IWalletBalance {
    className?: string;
}

export const WalletBalance = ({ className }: IWalletBalance) => {
    return (
        <HStack justify="between" className={cn('bg-secondary h-[120px] p-4 rounded-[12px] relative', {}, [className])}>
            <Image
                className="absolute block pointer-events-none select-none inset-0  object-cover"
                src={Mask}
                alt="wallet-mask"
                layout="fill"
            />
            <VStack gap="1">
                <Text className="text-white" text="Total Assets" size={TextSize.XS} />
                <Text className="text-white font-bold" text={'2,460.89'} size={TextSize.L} />
            </VStack>
            <Image className="" src={Vector} alt="vector" />
        </HStack>
    );
};
