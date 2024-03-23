"use client";
import React, { useContext, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { FcGoogle } from "react-icons/fc";
import logo from "../../../../assets/image/logo-dark.png";
import { useForm } from "react-hook-form";
import { AuthContext } from "@/Contexts/AuthProvider/AuthProvider";
import { GoogleAuthProvider } from "firebase/auth";
import { useRouter } from "next/navigation";
import Cookies from "js-cookie";
import { toast } from "sonner";

const RegisterPage = () => {
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const { register, handleSubmit } = useForm();
  const { createUserByEmail, providerGoogleLogIn } =
    useContext(AuthContext);
  const provider = new GoogleAuthProvider();

  const router = useRouter();

  const handleSignUp = (data) => {
    setError("");
    setLoading(true);
    createUserByEmail(data.email, data.password)
      .then((result) => {
        const user = result.user;
        if (user.accessToken) {
          router.push("/");
          Cookies.set("access_token", user.accessToken, {
            expires: 7,
          });
          setLoading(false);
        }

        toast.success("User Created Successful");
      })
      .catch((error) => {
        setError(error.message);
        setLoading(false);
      });
  };

  const handleGoogleSignUp = () => {
    providerGoogleLogIn(provider)
      .then((result) => {
        const user = result.user;
        if (user.accessToken) {
          router.push("/");
          Cookies.set("access_token", user.accessToken, {
            expires: 7,
          });
        }
      })
      .catch((error) => setError(error.message));
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2">
      <div
        className="min-h-screen hidden lg:flex"
        style={{
          backgroundImage: `url("https://utfs.io/f/1c6c814d-b66d-42ff-8ec0-62fb66005c03-eazrj7.png")`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="w-8/12 mx-auto flex justify-center items-center h-full ">
          <div>
            <h1 className="text-[40px] font-bold text-white">
              360 Degree Solution For Your{" "}
              <span className="text-[#0088FF]">Digital Business</span>
            </h1>
            <p className="text-gray-300 py-8">
              Ignite digital success with our 360-Degree solution. We provide
              everything from concept to design and development, domain and
              hosting to marketing. Trust us as your partner in the journey to
              your success.
            </p>
            <div className="grid grid-cols-3 gap-5 justify-center items-center">
              <button className="border border-gray-300 hover:border-white rounded-lg px-3 py-2 text-gray-300 hover:text-white">
                Web Application
              </button>
              <button className="border border-gray-300 hover:border-white rounded-lg px-3 py-2 text-gray-300 hover:text-white">
                Web Application
              </button>
              <button className="border border-gray-300 hover:border-white rounded-lg px-3 py-2 text-gray-300 hover:text-white">
                Web Application
              </button>
              <button className="border border-gray-300 hover:border-white rounded-lg px-3 py-2 text-gray-300 hover:text-white">
                Web Application
              </button>
              <button className="border border-gray-300 hover:border-white rounded-lg px-3 py-2 text-gray-300 hover:text-white">
                Web Application
              </button>
              <button className="border border-gray-300 hover:border-white rounded-lg px-3 py-2 text-gray-300 hover:text-white">
                Web Application
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="lg:w-8/12 lg:mx-auto mx-5 min-h-screen py-10">
        <div>
          <Image src={logo} alt="logo" className="w-[225px] h-[54px]" />
          <h2 className="mt-8">
            Already have an account?{" "}
            <Link
              href="/user/login"
              className="bg-gray-200 px-5 py-2 rounded font-medium"
            >
              Login
            </Link>
          </h2>
          <h1 className="my-20 text-4xl lg:text-[42px]">Register an Account</h1>
          <div>
            <h3>Register with Google:</h3>
            <button
              onClick={handleGoogleSignUp}
              className="w-full rounded-md py-3 border-2 border-gray-400/80 flex justify-center items-center gap-x-3 text-lg mt-2"
            >
              <FcGoogle className="h-6 w-6" />
              Register with Google
            </button>
          </div>
        </div>
        <div className="relative">
          <hr className="my-10" />
          <span className="absolute -top-3 left-[50%] bg-white px-3 text-sm">
            OR
          </span>
        </div>
        <form onSubmit={handleSubmit(handleSignUp)}>
          <div className="flex gap-x-5">
            <div>
              <h2 className=" font-semibold">First Name</h2>
              <input
                {...register("first_name", { required: true })}
                type="text"
                className="w-full py-[14px] px-4 rounded-md outline-none border-2 border-gray-400/80 mt-2"
              />
            </div>
            <div>
              <h2 className=" font-semibold"> Last Name</h2>
              <input
                {...register("last_name", { required: true })}
                type="text"
                className="w-full py-[14px] px-4 rounded-md outline-none border-2 border-gray-400/80 mt-2"
              />
            </div>
          </div>
          <div className="my-5">
            <h2 className=" font-semibold">Email</h2>

            <input
              {...register("email", { required: true })}
              type="email"
              className="w-full py-[14px] px-4 rounded-md outline-none border-2 border-gray-400/80 mt-2"
            />
          </div>
          <div className="my-5">
            <h2 className=" font-semibold">Password</h2>

            <input
              {...register("password", { required: true })}
              type="password"
              className="w-full py-[14px] px-4 rounded-md outline-none border-2 border-gray-400/80 mt-2"
            />
          </div>
          <span className="text-sm text-red-400 ">{error}</span>
          <div className="my-5">
            <button
              disabled={loading}
              className={
                loading
                  ? "w-full py-[14px] px-4 rounded-md outline-none mt-2 bg-[#bccddb] text-white"
                  : "w-full py-[14px] px-4 rounded-md outline-none mt-2 bg-[#0088FF] text-white"
              }
            >
              Register
            </button>
          </div>
        </form>
        <div className="text-xs text-gray-600">
          By proceeding with the registration process, you agree to the{" "}
          <span className="text-gray-900">Privacy Policy</span>,{" "}
          <span className="text-gray-900">Refund Policy</span>, and{" "}
          <span className="text-gray-900">Terms of Service</span>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
