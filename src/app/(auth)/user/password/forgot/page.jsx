"use client";
import React, { useContext, useState } from "react";
import logo from "../../../../../assets/image/logo-dark.png";
import Image from "next/image";
import Link from "next/link";
import { AuthContext } from "@/Contexts/AuthProvider/AuthProvider";
import { useForm } from "react-hook-form";

const ForgotPassword = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const { forgotPassword } = useContext(AuthContext);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleForgotPass = (data) => {
    setError("");
    setLoading(true);
    forgotPassword(data.email)
      .then(() => {
        alert("Check your email");
        setLoading(false);
      })
      .catch((error) => setError(error.message));
  };

  return (
    <div className="lg:w-5/12 lg:mx-auto mx-4 h-screen flex justify-center items-center">
      <div className="">
        <Image
          src={logo}
          alt="logo"
          className="w-[225px] h-[54px] flex justify-center mx-auto mb-8"
        />
        <div
          className="bg-white rounded-md w-full min-h-[400px] p-5 lg:p-10 relative"
          style={{
            boxShadow:
              " 0 2px 0px 0 rgba(0, 0, 0, 0.2), 0 0px 6px 0 rgba(0, 0, 0, 0.20)",
          }}
        >
          <h1 className="text-xl lg:text-3xl font-semibold pb-6">
            Forgot Your Password?
          </h1>
          <p>
            Nothing to worry about, you can always set a new password as long
            you have access to the email you used for registration. Enter your
            email, and we&apos;ll assist you in generating a new password.
          </p>
          <form onSubmit={handleSubmit(handleForgotPass)} className="my-6">
            <h2 className=" font-semibold">Email</h2>

            <input
              {...register("email", { required: true })}
              type="email"
              className="w-full py-[14px] px-4 rounded-md outline-none border-2 border-gray-400/80 mt-2"
            />
            <span className="text-sm text-red-400 py-2">{error}</span>
            <button
              disabled={loading}
              className={
                loading
                  ? "w-full py-[14px] px-4 rounded-md outline-none mt-3 bg-[#bccddb] text-white"
                  : "w-full py-[14px] px-4 rounded-md outline-none mt-3 bg-[#0088FF] text-white"
              }
            >
              Reset password
            </button>
          </form>
          <Link
            href="/user/login"
            className="absolute top-0 right-0 bg-white rounded-full p-4"
          >
            X
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
