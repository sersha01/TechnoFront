import { useContext } from "react";
import { Navigate } from "react-router-dom";
import AuthContext from "../Context/AuthContext";

export function PrivateRouteStudent({ children }) {
  const { user, user_is } = useContext(AuthContext);
  return user && user_is === "student" ? children : children;
}

export function PrivateRouteAdvisor({ children }) {
  const { user, user_is } = useContext(AuthContext);
  return user && user_is === "advisor" ? children : children;
}

export function PrivateRouteLead({ children }) {
  const { user, user_is } = useContext(AuthContext);
  return user && user_is === "lead" ? children : children;
}
