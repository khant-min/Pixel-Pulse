import { Button, styled } from "@mui/material";
import { Input } from "@mui/joy";
import { useState } from "react";
import axios from "../../axios-client";
import { useNavigate } from "react-router-dom";

const StyledForm = styled("form")({
  display: "flex",
  flexDirection: "column",
  gap: 10,
});

export default function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const res = await axios.post("/api/auth/login", { email, password });
    localStorage.setItem("user_info", JSON.stringify({ email }));
    navigate("/");
  };

  return (
    <StyledForm onSubmit={handleLogin}>
      <Input
        required
        placeholder="Enter your email"
        variant="outlined"
        value={email}
        onChange={(e: React.ChangeEvent<HTMLInputElement>): void =>
          setEmail(e.target.value)
        }
      />
      <Input
        required
        placeholder="Enter your password"
        variant="outlined"
        value={password}
        onChange={(e: React.ChangeEvent<HTMLInputElement>): void =>
          setPassword(e.target.value)
        }
      />
      <Button type="submit">Submit</Button>
    </StyledForm>
  );
}
