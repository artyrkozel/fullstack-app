'use client';

import { RegisterForm } from '@/features/auth';
import { ROUTES } from '@/shared/constants/routes';
import Button, { ButtonTheme } from '@/shared/ui/Button/Button';
import { TextSize } from '@/shared/ui/Text/Text';
import { Text } from '@/shared/ui/Text/Text';
import { useRouter } from 'next/navigation';

export default function RegisterPage() {
    const router = useRouter();

    return (
        <div>
            <div className="h-lvh w-full grid grid-cols-2 grid-rows-1">
                <div className="flex items-center justify-center bg-slate-400 bg-login-bg">
                    <div className="max-w-96">
                        <Text
                            className="text-white font-bold text-center mb-4"
                            title="Buy & Sell Each Digital Cryptocurrency and Arts"
                            size={TextSize.L}
                        />
                        <Text
                            className="text-white font-semibold text-center leading-6"
                            text="Easily buy Bitcoin and other cryptocurrencies using a wide range of payment options. Discover exclusive digital collectibles using InCrypto today"
                            size={TextSize.S}
                        />
                    </div>
                </div>
                <div className="flex flex-col relative items-center justify-center p-20 bg-grey-light">
                    <div className="max-w-sm">
                        <Text
                            className="mb-4 font-bold text-center"
                            title="Create Personal Account"
                            size={TextSize.M}
                        />
                        <RegisterForm />
                    </div>
                    <div className="max-w-80 absolute bottom-10">
                        <Text
                            className="text-[#848484] font-semibold text-center leading-6 mb-2"
                            text="Already have an account??"
                            size={TextSize.S}
                        />
                        <Button
                            variant={ButtonTheme.SECONDARY}
                            className="w-full"
                            onClick={() => router.push(ROUTES.LOGIN)}
                        >
                            Sing In
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    );
}
