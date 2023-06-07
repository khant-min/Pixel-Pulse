import { Outlet } from "react-router-dom";
import { Fragment } from "react";
import { Navigate } from "react-router-dom";

const Protected = () => {
  const user = localStorage.getItem("user_info");

  return user ? <Outlet /> : <Navigate to="auth" />;
};

export default Protected;
