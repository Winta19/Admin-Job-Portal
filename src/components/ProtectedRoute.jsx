import { Navigate } from "react-router-dom";

export default function ProtectedRoute({ role, children }) {
  const userRole = sessionStorage.getItem("role");

  if (!userRole) {
    return <Navigate to="/" />;
  }

  if (role && userRole !== role) {
    return <Navigate to="/" />;
  }

  return children;
}
