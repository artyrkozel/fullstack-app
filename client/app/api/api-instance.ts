import axios, { AxiosError, AxiosRequestConfig } from "axios";

export const apiInstance = axios.create({
    baseURL: "http://localhost:3000",
    headers: {
        "Content-Type": "application/json"
    },
})

apiInstance.interceptors.request.use(
    async (config) => {
      const authToken = localStorage.getItem('token');
      if (authToken) {
        config.headers.Authorization = authToken;
      }
      return config;
    },
    (error) => {
      return Promise.reject(error);
    }
   );

//    apiInstance.interceptors.response.use(
//     (res): any => (
//         console.log(res)
//     ),
//     async (error: AxiosError) => {
//         console.log(error)
//     }
// )

export const createInstance = <T>(config: AxiosRequestConfig, options?: AxiosRequestConfig): Promise<T> => {
    return apiInstance({
        ...config,
        ...options,
    }).then((res) => res.data);
}

export type BodyType<Data> = Data;

export type ErrorType<Error> = AxiosError<Error>