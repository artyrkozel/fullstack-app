import { ROUTES } from "@/shared/constants/routes";
import { useLoginPost } from "@/shared/queries/auth-service";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";

interface ILogin {
    email: string;
    password: string;
}

export function useRegister () {
    const router = useRouter();
    const { mutateAsync, isPending } = useLoginPost();

    const form = useForm<ILogin>({
        // resolver: zodResolver(UserSchema),
        mode: 'onChange',
        defaultValues: {
            email: '',
            password: '',
        },
    });

    const { handleSubmit } = form;

    return {
        form,
        handleSubmitLogin: handleSubmit((data) => mutateAsync(data, {
            onSuccess(res: any) {
                localStorage.setItem('token', JSON.stringify(res?.accessToken));
                router.push(ROUTES.TEST);
            },
        })),
        isLoadingLogin: isPending,
    }

}