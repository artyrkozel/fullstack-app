"use client"
import { FormProvider, SubmitHandler, useForm } from 'react-hook-form';
import { TextSize, Text } from './components/Text/Text';
import { ControllerInput } from './components/ControllerInput/ControllerInput';
import Button from './components/Button/Button';

export default function Home() {
    const form = useForm({
        // resolver: zodResolver(UserSchema),
        mode: 'onChange',
    });
    const handleSubmit: SubmitHandler<any> = async (data) => console.log(data);
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
                <div className=" flex items-center justify-center p-20 bg-grey-light">
                    <div className="max-w-xs">
                        <Text
                            className="mb-4 font-bold text-center"
                            title="Create Personal Account"
                            size={TextSize.M}
                        />
                        <FormProvider {...form}>
                            <form onSubmit={form.handleSubmit(handleSubmit)}>
                                <ControllerInput
                                    className="mb-6"
                                    name="email"
                                    label="email"
                                    type="text"
                                    autoFocus
                                    placeholder="Enter your email"
                                    max={19}
                                />
                                <ControllerInput
                                    className="mb-4"
                                    name="password"
                                    label="password"
                                    type="text"
                                    autoFocus
                                    placeholder="Enter your password"
                                    max={19}
                                />
                                <Button type="submit" className="w-full mb-2">
                                    Log in
                                </Button>
                                <Button className="w-full" variant="secondary">
                                    Sign up
                                </Button>
                            </form>
                        </FormProvider>
                    </div>
                </div>
            </div>
        </div>
    );
}
