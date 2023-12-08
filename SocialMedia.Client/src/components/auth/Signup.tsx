import { FormHelperText, Button, styled } from "@mui/material";
import { Input } from "@mui/joy";
import { useState } from "react";
import axiosClient from "../../axios-client";
import { useAuth } from "../../context/DataContext";
import { DataContextProps } from "../../types";
import { useNavigate } from "react-router-dom";

const StyledForm = styled("form")({
  display: "flex",
  flexDirection: "column",
  gap: 10,
});

export default function Signup() {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [confirmPassword, setConfirmPassword] = useState<string>("");
  const [pic, setPic] = useState<string>("");
  const navigate = useNavigate();

  const { setToken } = useAuth() as DataContextProps;

  const handleSignup = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const { data } = await axiosClient.post("/api/auth/signup", {
      name,
      email,
      password,
      // pic,
    });
    setToken(data.accessToken);
    navigate("/");
  };

  return (
    <StyledForm onSubmit={handleSignup}>
      <Input
        required
        placeholder="Enter your username"
        variant="outlined"
        value={name}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setName(e.target.value)
        }
      />
      <Input
        required
        placeholder="Enter your email"
        variant="outlined"
        value={email}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setEmail(e.target.value)
        }
      />
      <Input
        required
        placeholder="Enter your password"
        variant="outlined"
        type="password"
        value={password}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setPassword(e.target.value)
        }
      />
      <Input
        required
        placeholder="Enter your password again"
        variant="outlined"
        type="password"
        value={confirmPassword}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setConfirmPassword(e.target.value)
        }
      />
      {/* <Input
        required
        variant="outlined"
        type="file"
        value={pic}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setPic(e.target.value)
        }
      /> */}
      <Button type="submit">Submit</Button>
    </StyledForm>
  );
}
