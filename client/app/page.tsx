"use client";
import React, { FormEvent, useState } from "react";
import Button from "./components/Button";
import Input from "./components/Input";

interface FormData {
  name?: string;
  email?: string;
  password?: string;
}

export default function Home() {
  const [formData, setFormData] = useState<FormData>({
    email: "",
    password: "",
    name: "",
  });

  function handleChange(event: React.ChangeEvent<HTMLInputElement>): void {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>): void {
    event.preventDefault();
    console.log(formData);
  }
  return (
    <div className="flex flex-col justify-center items-center py-8 min-h-screen bg-cover bg-[url('../public/images/login_bg.jpg')] bg-no-repeat ">
      <div className="flex flex-col h-2/3 w-96 rounded-xl bg-[#f5f6f9]">
        {/* Heading */}
        <div className="rounded-t-xl">
          <h1 className="flex flex-col text-black text-center m-4 py-4 text-3xl font-sans font-extrabold ">
            Sign in
          </h1>
        </div>
        {/* form field */}
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
            className="text-blue-700 text-end font-light text-sm "
          >
            Forgot password?
          </a>
          {/* Button */}
          <div className="flex flex-col items-center my-10">
            <Button type="submit">Sign in</Button>
          </div>
        </form>
      </div>
    </div>
  );
}
