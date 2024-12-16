import { FormProvider } from 'react-hook-form';
import { useRegister } from '../model/useRegister';
import Button from '@/shared/ui/Button/Button';
import { ControllerInput } from '@/shared/ui/ControllerInput/ControllerInput';

export function RegisterForm() {
    const { form, handleSubmitLogin, isLoadingLogin } = useRegister();

    return (
        <FormProvider {...form}>
            <form onSubmit={handleSubmitLogin}>
                <ControllerInput
                    className="mb-5"
                    name="email"
                    label="email"
                    type="text"
                    autoFocus
                    placeholder="Enter your email"
                    max={19}
                />
                <ControllerInput
                    className="mb-5"
                    name="password"
                    label="password"
                    type="text"
                    autoFocus
                    placeholder="Enter your password"
                    max={19}
                />
                <ControllerInput
                    className="mb-4"
                    name="passwordRepeat"
                    label="repeat password"
                    type="text"
                    autoFocus
                    placeholder="Repeat password"
                    max={19}
                />
                <Button type="submit" className="w-full mb-2" isLoading={isLoadingLogin}>
                    Create Personal Account
                </Button>
            </form>
        </FormProvider>
    );
}
