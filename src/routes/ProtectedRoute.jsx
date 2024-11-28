import { Navigate } from "react-router-dom";
import useUserStore from "../store/useUsersStore";

export default function ProtectedRoute({ children }) {
  const { user } = useUserStore();

  if (!user || user.role !== "admin") {
    return <Navigate to="/login" replace />;
  }

  return children;
}
