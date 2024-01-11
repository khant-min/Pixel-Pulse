import React from "react";
import { TextField } from "@mui/material";
import { FieldValues, UseFormRegister } from "react-hook-form";
import { Link } from "react-router-dom";

type Inputs = {
  [key: string]: string;
  email: string;
  password: string;
};

interface FormInput {
  id: string;
  label: string;
  register: UseFormRegister<Inputs>;
  name: string;
  inputType: string;
  errorMsg: string;
}

interface AuthFormProps {
  onSubmit: () => void; // Adjust the type based on your actual submit function
  formInputs: FormInput[];
  errors: Record<string, any>;
  to: string;
}

const AuthForm: React.FC<AuthFormProps> = ({
  onSubmit,
  formInputs,
  errors,
  to,
}) => {
  return (
    <div className="auth-container">
      <div className="auth-subcontainer">
        <div className="auth-header">
          <span>
            <h1 className="header">Pixel Pulse</h1>
          </span>
          <span>
            <h3 className="sub-header">Social Media Platform</h3>
          </span>
        </div>
        <div className="auth-form">
          <form onSubmit={onSubmit}>
            {formInputs.map(input => (
              <React.Fragment key={input.id}>
                <TextField
                  type={input.inputType}
                  id={`outlined-basic-${input.id}`}
                  label={input.label}
                  variant="outlined"
                  {...input.register}
                />
                {errors[input.name] && (
                  <span className="err-msg">{input.errorMsg}</span>
                )}
              </React.Fragment>
            ))}

            <div className="submit-control">
              <span className="auth-link">
                {to === "login" ? (
                  <Link to="/login">Already have an account? Login</Link>
                ) : (
                  <Link to="/register">Doesn't have and account? Register</Link>
                )}
              </span>
              <button className="auth-btn">Submit</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AuthForm;
