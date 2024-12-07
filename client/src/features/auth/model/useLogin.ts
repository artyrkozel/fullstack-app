import { ROUTES } from "@/shared/constants/routes";
import { useLoginPost } from "@/shared/queries/auth-service";
import { setItemLS } from "@/shared/utils/local-storage";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";

interface ILogin {
    email: string;
    password: string;
}

export function useLogin () {
    const router = useRouter();
    const { mutateAsync, isPending } = useLoginPost();

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