import axios, { AxiosRequestConfig } from "axios";
import {
  getAccessToken,
  getRefreshToken,
  saveAccessToken,
  saveRefreshToken,
} from "../../utils/io";

type TokenResponse = {
  accessToken: string;
  refreshToken: string;
};

interface RequestConfig extends AxiosRequestConfig {
  headers: {
    Authorization: string;
    "Content-Type": string;
  };
}

const axiosInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_BASE_URL,
});

const addAccessToken = (accessToken: string) => {
  axiosInstance.defaults.headers.common.Authorization = `Bearer ${accessToken}`;
};

export const removeAccessToken = () => {
  delete axiosInstance.defaults.headers.common.Authorization;
};

axiosInstance.interceptors.request.use((config: RequestConfig) => {
  const token = getAccessToken();
  const newConfig = config;
  newConfig.headers.Authorization = `Bearer ${token}`;
  newConfig.headers["Content-Type"] = "application/json";
  return newConfig;
});

axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => {
    const originalRequest = error.config;

    if (error?.response?.status === 401) {
      const refreshToken = getRefreshToken();
      if (refreshToken) {
        return axiosInstance
          .post<TokenResponse>(`/auth/token`, {
            token: refreshToken,
          })
          .then(({ data }) => {
            removeAccessToken();
            saveRefreshToken(data.refreshToken);
            saveAccessToken(data.accessToken);
            addAccessToken(data.accessToken);
            return axiosInstance(originalRequest);
          });
      }
      return Promise.reject(error);
    }

    if (error?.reponse?.status === 409) {
      throw new Error("Entry already exists!");
    }

    return Promise.reject(error);
  }
);

export default axiosInstance;
