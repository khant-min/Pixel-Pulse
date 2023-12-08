import { Navigate, Outlet } from "react-router-dom";

const Protected = () => {
  const user = localStorage.getItem("ACCESS_TOKEN");

  return user ? <Outlet /> : <Navigate to="auth" />;
};

export default Protected;
