'use client'
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { ROUTES } from "@/shared/constants/routes";
import { Register } from "@/shared/queries/auth-service";


interface IRegister {
    email: string;
    password: string;
    passwordRepeat: string;
}

export function useRegister () {
    const router = useRouter();
    const { mutateAsync, isPending } = Register();

    const form = useForm<IRegister>({
        // resolver: zodResolver(UserSchema),
        mode: 'onChange',
        defaultValues: {
            email: '',
            password: '',
            passwordRepeat: '',
        },
    });

    const { handleSubmit } = form;

    return {
        form,
        handleSubmitLogin: handleSubmit((data) => mutateAsync(data, {
            onSuccess(res: any) {
                console.log(res);
                router.push(ROUTES.LOGIN);
            },
        })),
        isLoadingLogin: isPending,
    }

}