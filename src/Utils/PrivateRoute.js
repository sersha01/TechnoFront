import { useContext } from "react";
import { Navigate } from "react-router-dom";
import AuthContext from "../Context/AuthContext";


export function PrivateRouteStudent({ children }) {
    const {user, user_is} = useContext(AuthContext);
    return (
      user && user_is === 'student' ? children : <Navigate to="/signin" />
      );
  }

export function PrivateRouteAdvisor({ children }) {
  const {user, user_is} = useContext(AuthContext);
  return (
    user && user_is === 'advisor' ? children : <Navigate to="/signin" />
    );
}

export function PrivateRouteLead({ children }) {
  const {user, user_is} = useContext(AuthContext);
  return (
    user && user_is === 'lead' ? children : <Navigate to="/signin" />
    );
}
