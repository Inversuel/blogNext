import { Button } from "@/component/ui/button";
import Container from "@/component/ui/container";
import { Typography } from "@/component/ui/typography";
import { useRouter } from "next/navigation";
import React from "react";
import { useForm } from "react-hook-form";

type FormType = {
  firstName: string;
  lastName: string;
  email: string;
  mobileNumber: string;
};

const Form = () => {
  const { push } = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormType>();
  const onSubmit = async (data: FormType) => {
    const response = await fetch("/api/form/form", {
      headers: {
        "Content-Type": "application/json",
      },
      method: "POST",
      body: JSON.stringify({ ...data, url: window.location.href }),
    });
    if (response.ok) {
      push("/");
    }
  };
  return (
    <Container className="flex flex-col items-center gap-4">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-full max-w-lg rounded px-8 pt-6 pb-8 mb-4"
      >
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="firstName"
          >
            First name
          </label>
          <input
            type="text"
            placeholder="First name"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            {...register("firstName", {
              required: { value: true, message: "Input is required!" },
              maxLength: {
                value: 80,
                message: "The maximum number of characters is 80!",
              },
            })}
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="lastName"
          >
            Last name
          </label>
          <input
            type="text"
            placeholder="Last name"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            {...register("lastName", {
              required: { value: true, message: "Input is required!" },
              maxLength: {
                value: 100,
                message: "The maximum number of characters is 100!",
              },
            })}
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="email"
          >
            Email
          </label>
          <input
            type="text"
            placeholder="Email"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            {...register("email", {
              required: { value: true, message: "Input is required!" },
              pattern: { value: /^\S+@\S+$/i, message: "Email must be valid!" },
            })}
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="mobileNumber"
          >
            Mobile number
          </label>
          <input
            type="tel"
            placeholder="Mobile number"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            {...register("mobileNumber", {
              required: { value: true, message: "Input is required!" },
              minLength: { value: 6, message: "Phone number is to short!" },
              maxLength: {
                value: 12,
                message: "The maximum number of characters is 12!",
              },
            })}
          />
        </div>
        <Button type="submit">Submit</Button>
        <Typography className="text-destructive whitespace-pre-line">
          {errors.email?.message}
        </Typography>
        <Typography className="text-destructive whitespace-pre-line">
          {errors.firstName?.message}
        </Typography>
        <Typography className="text-destructive whitespace-pre-line">
          {errors.lastName?.message}
        </Typography>
        <Typography className="text-destructive whitespace-pre-line">
          {errors.mobileNumber?.message}
        </Typography>
      </form>
    </Container>
  );
};

export default Form;
