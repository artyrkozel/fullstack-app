import { useMutation } from "@tanstack/react-query";
import { getBlockList } from "../api/generated";
import { removeLS } from "../lib/local-storage";

// export const useMe = () =>
//     useQuery<Response, AxiosError>({
//       queryKey: ["me"],
//       queryFn: () => client.get(`/user/me`).then(res => res.data),
//     });

const Login = () => {
  return useMutation({ mutationFn: getBlockList().authControllerLogin});
}

const Register = () => {
  return useMutation({ mutationFn: getBlockList().authControllerRegister});
}

const Logout = () => {
  return useMutation({ mutationFn: getBlockList().authControllerLogout, onSuccess: () => {
    removeLS('token');
},});
}

export {Login, Register, Logout}