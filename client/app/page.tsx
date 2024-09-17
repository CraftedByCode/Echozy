"use client";
import Button from "./components/Button";
import Input from "./components/Input";
import { FcGoogle } from "react-icons/fc";
import { SiFacebook } from "react-icons/si";
import { RiTwitterXFill } from "react-icons/ri";
import React, { useState } from "react";
import axios from "axios";
export default function Home() {
  // types
  type FormData = {
    name?: string;
    email: string;
    password: string;
  };

  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    password: "",
  });

  // handle functions
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const resx = await axios.post("http://localhost:8000/login", formData, {
      headers: {
        "Content-Type": "application/json",
      },
    });
    +console.log(resx);
  };

  // cool jsx stuffs
  return (
    <div className="flex flex-col justify-center items-center py-8 min-h-screen bg-[url('../public/images/login_bg.svg')] bg-cover">
      <div className="flex flex-col h-2/3 w-96  rounded-xl bg-[#f5f6f9] ">
        <div className="rounded-t-xl">
          <h1 className="flex flex-col text-black text-center m-4 py-4 text-3xl font-sans font-extrabold ">
            Sign in
          </h1>
        </div>

        <form className="flex flex-col px-8 py-4" onSubmit={handleSubmit}>
          <Input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          >
            Email
          </Input>
          <Input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
          >
            Password
          </Input>
          <a
            href="forgotPassword"
            className="text-blue-600 text-end font-bold text-sm "
          >
            Forgot password?
          </a>
          <div className="flex flex-col items-center mt-4">
            <Button>Sign in</Button>
          </div>
        </form>
        <div>
          <div className="flex items-center justify-center">
            <hr className="w-[38%] border-t-2 border-gray-400" />
            <span className="mx-2 text-gray-500">Or</span>
            <hr className="w-[38%] border-t-2 border-gray-400" />
          </div>

          <div className="flex justify-around my-2 py-4 ">
            <FcGoogle size={50} className="rounded-full p-2" />
            <SiFacebook color="blue" size={50} className="rounded-full p-2" />
            <RiTwitterXFill
              color="black"
              size={50}
              className="rounded-full p-2"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
