import { Navigate, Outlet } from "react-router-dom";

export const ProtectedRoutes = () => {
  const userLoggedString = localStorage.getItem("@USERLOGGED");
  const isUserLogged = userLoggedString ? JSON.parse(userLoggedString) : false;

  return isUserLogged ? <Outlet /> : <Navigate to="/" />;
};
