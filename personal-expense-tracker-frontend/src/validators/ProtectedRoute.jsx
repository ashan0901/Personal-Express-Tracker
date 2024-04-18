import { Navigate } from "react-router-dom";

export const ProtectedRoute = ({ children }) => {
  const isLoggedIn = sessionStorage.getItem("loginStatus") === "true";

  if (!isLoggedIn) {
    return <Navigate to="/" />;
  }

  return children;
};
export default ProtectedRoute;
