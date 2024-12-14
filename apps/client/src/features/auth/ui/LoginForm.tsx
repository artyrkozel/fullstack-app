import { FormProvider } from 'react-hook-form';
import { ControllerInput } from '@/shared/ui/ControllerInput/ControllerInput';
import Button from '@/shared/ui/Button/Button';
import { useLogin } from '../model/useLogin';

export function LoginForm() {
    const { form, handleSubmitLogin, isPending } = useLogin();

    return (
        <FormProvider {...form}>
            <form onSubmit={handleSubmitLogin}>
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
                <Button type="submit" className="w-full mb-2" isLoading={isPending}>
                    Log in
                </Button>
            </form>
        </FormProvider>
    );
}
