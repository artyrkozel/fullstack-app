"use client";

import type { Metadata } from "next";
import { useEffect } from "react";

const metadata: Metadata = {
    title: "Login",
    description: "Login to your account",
};

const Login = () => {
  useEffect(() => {
    const getUser = async () => {
      const user = await fetch(
        "http://localhost:3000/user/e82d176e-8104-4753-ac7b-ff88233aa1ba"
      );
      const res = await user.json();
      console.log(res);
    };
    getUser();
  }, []);

  return <div>Login</div>;
};

export default Login;
