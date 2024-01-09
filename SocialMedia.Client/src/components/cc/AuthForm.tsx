import React from "react";
import { TextField } from "@mui/material";
import { FieldValues, UseFormRegister } from "react-hook-form";

interface FormInput {
  id: string;
  label: string;
  register: UseFormRegister<FieldValues>;
  name: string;
  errorMsg: string;
}

interface AuthFormProps {
  onSubmit: () => void; // Adjust the type based on your actual submit function
  formInputs: FormInput[];
  errors: Record<string, any>;
}

const AuthForm: React.FC<AuthFormProps> = ({
  onSubmit,
  formInputs,
  errors,
}) => {
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
          <form onSubmit={onSubmit}>
            {formInputs.map(input => (
              <React.Fragment key={input.id}>
                <TextField
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
            <button className="login-btn">Submit</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AuthForm;
