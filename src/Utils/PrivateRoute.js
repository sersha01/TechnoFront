import { useContext } from "react";
import { Navigate } from "react-router-dom";
import AuthContext from "../AuthContext/AuthContext";


export function PrivateRoute({ children }) {
    const {user} = useContext(AuthContext);
    return user ? children : <Navigate to="/signin" />;
  }

