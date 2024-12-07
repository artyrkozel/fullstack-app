import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { AxiosError } from "axios";
import { getBlockList } from "../api/generated";

// export const useMe = () =>
//     useQuery<Response, AxiosError>({
//       queryKey: ["me"],
//       queryFn: () => client.get(`/user/me`).then(res => res.data),
//     });

const useLoginPost = () => {
  return useMutation({ mutationFn: getBlockList().authControllerLogin});
}

export {useLoginPost}