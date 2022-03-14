import axios, { AxiosError } from "axios";
import { useRouter } from "next/router";
import React, { FC, useContext } from "react";
import { useGoogleLogin } from "react-google-login";
import { AuthContext } from "../../../contexts/AuthContext";
import NavLink from "./NavLink";

const AuthLink: FC<any> = ({ children, className, filled }) => {
  const { setUser } = useContext(AuthContext);
  const router = useRouter();

  const onSuccess = async (res: any) => {
    axios
      .get(
        `${process.env.NEXT_PUBLIC_API_BASE_URL}/user?idToken=${res.tokenId}`
      )
      .then(({ data }) => {
        setUser(data);
        router.push("/dashboard");
      })
      .catch((err: AxiosError) => {
        if (err.response?.status === 404) {
          router.push(
            `/signup?idToken=${res.tokenId}&avatar=${res.profileObj.imageUrl}`
          );
        }
      });
  };

  const onFailure = (error: string) => {
    console.log(error);
  };

  const { signIn } = useGoogleLogin({
    clientId: process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID,
    onSuccess,
    onFailure,
    responseType: "token",
    redirectUri: process.env.NEXT_PUBLIC_AUTH_REDIRECT_URI,
  });

  return (
    <NavLink onClick={signIn} filled={filled} className={className}>
      {children}
    </NavLink>
  );
};

export default AuthLink;
