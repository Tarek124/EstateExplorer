/* eslint-disable react/prop-types */
import { useContext } from "react";
import { MyContext } from "../AppContext/AppContext";
import { Navigate, useLocation } from "react-router-dom";

export default function PrivateRoutes({ children }) {
  const { user } = useContext(MyContext);
  const location = useLocation();
  if (user) {
    return children;
  } else {
    return <Navigate state={location.pathname} to="/login"></Navigate>;
  }
}
