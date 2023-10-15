import { Navigate } from "react-router-dom";
import { isAuthenticated } from "./AuthService";
import { useAuth } from "../hooks/useAuth";

const ProtectedRoute = ({ children }) => {
  const { user } = useAuth();
  if (!isAuthenticated(user)) {
    return <Navigate to="/login" replace/>;
  } else if (!isAuthenticated(user) && children.type.name === "Login") {
    return <Navigate to="/" replace/>;
  } else {
    return children
  }
};

export default ProtectedRoute;
