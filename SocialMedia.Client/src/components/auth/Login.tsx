import { Button, TextField, styled } from "@mui/material";
import { Input } from "@mui/joy";
import { useState } from "react";
import axios from "../../axios-client";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/DataContext";
import { DataContextProps } from "../../types";

import { useForm, SubmitHandler } from "react-hook-form";

const StyledForm = styled("form")({
  display: "flex",
  flexDirection: "column",
  gap: 10,
});

type Inputs = {
  email: string;
  password: string;
};

export default function Login() {
  const navigate = useNavigate();
  // const [email, setEmail] = useState<string>("");
  // const [password, setPassword] = useState<string>("");
  const { setToast } = useAuth() as DataContextProps;

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = data => console.log(data);

  const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    // e.preventDefault();
    // const { data } = await axios.post("/api/auth/login", { email, password });
    // localStorage.setItem("ACCESS_TOKEN", data.accessToken);
    // setToast({ open: true, status: "success", message: "Login successfully" });
    // navigate("/");
  };

  return (
    <div className="login-container">
      <div className="login-subcontainer">
        <div className="login-header">
          <span>
            <h1>Pixel Pulse</h1>
          </span>
          <span>
            <h3>Social Media Platform</h3>
          </span>
        </div>
        <div className="login-form">
          <form onSubmit={handleSubmit(onSubmit)}>
            <TextField
              id="outlined-basic"
              label="Email"
              variant="outlined"
              {...register("email")}
            />
            {errors.email && <span className="err-msg">Email is required</span>}

            <TextField
              id="outlined-basic"
              label="Password"
              variant="outlined"
              {...register("password", { required: true })}
            />
            {errors.password && (
              <span className="err-msg">Password is required</span>
            )}
            {/* <button>Login</button> */}
            <button className="login-btn">Login</button>
          </form>
        </div>
      </div>
    </div>
  );
}
