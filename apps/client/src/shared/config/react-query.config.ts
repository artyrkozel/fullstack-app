import { QueryCache, QueryClientConfig } from "@tanstack/react-query";
import toast from "react-hot-toast";

export const queryClientConfig: QueryClientConfig = {
    defaultOptions: {
        queries: {
            retry: false,
            staleTime: 60 * 1000,
            refetchOnWindowFocus: false,
        },
        mutations: {
            onError(error) {
                if (error.message) {
                    toast.error(error.message);
                }
            },
        },
    },
    queryCache: new QueryCache({
        onError: async (error) => {
            if (error.message) {
                toast.error(error.message);
            }
        },
    }),
}