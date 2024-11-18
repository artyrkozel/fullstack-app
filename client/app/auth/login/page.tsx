'use client';
import { useMutation, useQuery } from '@tanstack/react-query';
import { FormProvider, SubmitHandler, useForm } from 'react-hook-form';

import { getBlockList } from '../../api/generated';
import { TextSize, Text } from '@/app/components/Text/Text';
import { ControllerInput } from '@/app/components/ControllerInput/ControllerInput';
import Button from '@/app/components/Button/Button';
import { useRouter } from 'next/navigation';
import { signIn } from 'next-auth/react';

interface ILogin {
    email: string;
    password: string;
}

const Login = () => {
    // const { data } = useQuery({
    //     queryKey: ['test'],
    //     queryFn: async () => getBlockList().userControllerFindOne('eewfwef23f2'),
    // });
    const router = useRouter();
    const { mutateAsync: register } = useMutation({ mutationFn: getBlockList().authControllerRegister });
    const { mutateAsync } = useMutation({ mutationFn: getBlockList().authControllerLogin });

    const form = useForm<ILogin>({
        // resolver: zodResolver(UserSchema),
        mode: 'onChange',
        defaultValues: {
            email: '',
            password: '',
        },
    });
    const handleSubmit: SubmitHandler<ILogin> = async (data) => {
        signIn('credentials', {
            email: data.email,
            password: data.password,
        });
        // await mutateAsync(
        //     { email: data.email, password: data.password },
        //     {
        //         onSuccess: (data: any) => {
        //             console.log('12121212121212121212', data);
        //             if (data.accessToken) {
        //                 localStorage.setItem('token', data.accessToken);
        //             }
        //             router.push('/');
        //         },
        //     },
        // );
    };

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
};

export default Login;
