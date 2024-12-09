import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { AxiosError } from "axios";
import { getBlockList } from "../api/generated";

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

export {Login, Register}