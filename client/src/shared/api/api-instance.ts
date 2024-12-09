import axios, { AxiosError, AxiosRequestConfig } from "axios";
import createAuthRefreshInterceptor from "axios-auth-refresh";

export const apiInstance = axios.create({
    baseURL: "http://localhost:3000",
    headers: {
      'Content-Type': 'application/json',
  },
    withCredentials: true,
})

apiInstance.interceptors.request.use(
    async (config) => {
      const token = localStorage.getItem('token');

      if (token) {
        config.headers['authorization'] = JSON.parse(token);
      }
      return config;
    },
    (error) => {
      return Promise.reject(error);
    }
   );

const refresh = (faildReq: AxiosError<any>) => {
  if (faildReq.response && faildReq.response.data.statusCode === 401 && faildReq.response.data.message === 'Token has expired') {
    return apiInstance.get("/auth/refresh-tokens")
      .then(res => {
        localStorage.setItem('token', JSON.stringify(res.data.accessToken));
        return Promise.resolve(res);
      })
      .catch(() => {
        return Promise.reject();
      })
  }

  return Promise.reject(faildReq)
}
createAuthRefreshInterceptor(apiInstance, refresh)

apiInstance.interceptors.response.use(
  response => response,
  async error => {
    const e = error as any;
    throw e.response?.data || error
  }
)

export const createInstance = <T>(config: AxiosRequestConfig, options?: AxiosRequestConfig): Promise<T> => {
    return apiInstance({
        ...config,
        ...options,
    }).then((res) => res.data);
}

export type BodyType<Data> = Data;

export type ErrorType<Error> = AxiosError<Error>
