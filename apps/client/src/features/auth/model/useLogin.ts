import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { ROUTES } from "@/shared/constants/routes";
import { setItemLS } from "@/shared/lib/local-storage";
import { Login } from "@/shared/queries/auth-service";


interface ILogin {
    email: string;
    password: string;
}

export function useLogin () {
    const router = useRouter();
    const { mutateAsync, isPending } = Login();

    const form = useForm<ILogin>({
        // resolver: zodResolver(UserSchema),
        mode: 'onChange',
        defaultValues: {
            email: 'test@mail.ru',
            password: '1234567',
        },
    });

    const { handleSubmit } = form;

    return {
        form,
        handleSubmitLogin: handleSubmit((data) => mutateAsync(data, {
            onSuccess(res: any) {
                setItemLS('token', res?.accessToken)
                router.push(ROUTES.TEST);
            },
        })),
        isPending,
    }

}