import React from "react";
import SignUpForm from "./form";
import { getAccessToken, getRefreshToken } from "../../utils/io";

const SignUp = () => {
  if (typeof window !== "undefined" && getAccessToken() && getRefreshToken())
    return <h1>Login</h1>;

  return (
    <div className="flex flex-col justify-center min-h-screen py-4">
      <SignUpForm />
    </div>
  );
};

export default SignUp;
