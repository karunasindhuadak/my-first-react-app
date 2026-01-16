import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button, Logo, Input } from "./index";
import authService from "../appwrite/auth";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { login as storeLogin } from "../store/authSlice";

function Login() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { register, handleSubmit } = useForm();
  const [error, setError] = useState("");

  const login = async (data) => {
    setError("");
    try {
      const session = await authService.login(data);
      if (session) {
        const userData = await authService.getCurrentUser();
        if (userData) dispatch(storeLogin({ userData }));
        navigate("/");
      }
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-slate-50 px-4">
      <div className="w-full max-w-md bg-white rounded-xl p-8 border border-slate-200 shadow-sm">
        <div className="mb-4 flex justify-center">
          <span className="inline-block w-full max-w-[96px]">
            <Logo width="100%" />
          </span>
        </div>

        <h2 className="text-center text-xl font-semibold text-slate-800">
          Sign in to your account
        </h2>

        <p className="mt-2 text-center text-sm text-slate-500">
          Don&apos;t have an account?{" "}
          <Link
            to="/signup"
            className="font-medium text-blue-600 hover:underline"
          >
            Sign up
          </Link>
        </p>

        {error && (
          <p className="mt-4 text-sm text-red-600 text-center">
            {error}
          </p>
        )}

        <form onSubmit={handleSubmit(login)} className="mt-6">
          <div className="space-y-4">
            <Input
              label="Email"
              placeholder="Enter your email"
              type="email"
              {...register("email", {
                required: true,
                validate: {
                  matchPatern: (value) =>
                    /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(value) ||
                    "Email address must be a valid address",
                },
              })}
            />

            <Input
              label="Password"
              placeholder="Enter your password"
              type="password"
              {...register("password", {
                required: true,
              })}
            />

            <Button type="submit" className="w-full">
              Sign in
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
