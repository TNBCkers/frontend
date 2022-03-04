import axios, { AxiosError } from "axios";
import { useRouter } from "next/router";
import { useContext } from "react";
import { AuthContext, STATUS } from "../../contexts/AuthContext";
import { saveAccessToken, saveRefreshToken } from "../../utils/io";

interface UserPayload {
  name: string;
  avatar: string | any;
  description: string;
  tagline: string;
}

export const useSubmit = (
  idToken: string,
  payLoad: UserPayload,
  setError: any
) => {
  const router = useRouter();
  const { setUser, setStatus } = useContext(AuthContext);
  const isValid = validate(payLoad, idToken);
  const returnFunction = () => {
    if (!isValid) return setError("Fill all the required fields!");
    setError("");
    axios
      .post(
        `${process.env.NEXT_PUBLIC_API_BASE_URL}/user/signup`,
        {
          ...payLoad,
        },
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${idToken}`,
          },
        }
      )
      .then(({ data }) => {
        setUser(data.user);
        saveAccessToken(data.accessToken);
        saveRefreshToken(data.refreshToken);
        setStatus(STATUS.LOGGED);
        router.push("/dashboard");
      })
      .catch((e: AxiosError) => {
        if (e.response?.status === 401) console.log("Bruh");
      });
  };
  return returnFunction;
};

export const validate = (payload: UserPayload, idToken: string) => {
  let k: keyof typeof payload;
  for (k in payload) {
    if (!payload[k]) return false;
  }
  if (!idToken) return false;
  return true;
};
