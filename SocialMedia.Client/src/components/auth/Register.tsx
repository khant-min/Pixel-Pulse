// Register.tsx
import React from "react";
import AuthForm from "../cc/AuthForm";
import { useForm, UseFormRegister } from "react-hook-form";

type Inputs = {
  [key: string]: string;
  email: string;
  password: string;
};

interface FormInput {
  id: string;
  label: string;
  register: UseFormRegister<Inputs> | any;
  name: string;
  errorMsg: string;
}

const Register: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();

  const onSubmit = (data: Record<string, any>) => {
    // Your register logic here
    console.log(data);
  };

  const formInputs: FormInput[] = [
    {
      id: "username",
      label: "Username",
      register: register("username"),
      name: "username",
      errorMsg: "Username is required",
    },
    {
      id: "email",
      label: "Email",
      register: register("email"),
      name: "email",
      errorMsg: "Email is required",
    },
    {
      id: "password",
      label: "Password",
      register: register("password", { required: true }),
      name: "password",
      errorMsg: "Password is required",
    },
    {
      id: "confirmPassword",
      label: "Confirm Password",
      register: register("confirmPassword", { required: true }),
      name: "confirmPassword",
      errorMsg: "Confirm Password is required",
    },
  ];

  return (
    <AuthForm
      onSubmit={handleSubmit(onSubmit)}
      formInputs={formInputs}
      errors={errors}
    />
  );
};

export default Register;
