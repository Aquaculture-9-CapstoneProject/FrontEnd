import { Navigate } from "react-router-dom";
import useUserStore from "../store/useUsersStore";

export default function ProtectedRoute({ children, allowedRole }) {
  const { user } = useUserStore();

  if (!user || user.role !== allowedRole) {
    return <Navigate to="/" replace />;
  }

  return children;
}
