import { Navigate, Outlet } from "react-router-dom";

const ProtectedAuth = () => {
  const user = localStorage.getItem("ACCESS_TOKEN");

  return !user ? <Outlet /> : <Navigate to="/" />;
};

export default ProtectedAuth;
