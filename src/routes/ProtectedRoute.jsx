import { Navigate } from "react-router-dom";

export default function ProtectedRoute({ children }) {
  const user = "user";

  if (user !== "admin") {
    return <Navigate to="/login" replace />;
  }

  return children;
}
