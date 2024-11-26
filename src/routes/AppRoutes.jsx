import { Routes, Route } from "react-router-dom";
import Login from "../components/auth/login/Login";
import LandingPage from "../pages/users/LandingPage";
import ProtectedRoute from "./ProtectedRoute";
import Dashboard from "../pages/admin/Dashboard";
import Error from "../components/common/Error";
import Register from "../components/auth/register/Register";

export default function AppRoutes() {
  const userRole = "user"; // Role statis: bisa diganti dengan "admin" atau "user"

  return (
    <Routes>
      {/* Rute untuk login dan registrasi */}
      <Route path="*" element={<Error />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />

      {/* Rute untuk pengguna biasa */}
      {userRole !== "admin" && <Route path="/" element={<LandingPage />} />}

      {/* Rute untuk admin */}
      {userRole === "admin" && (
        <Route
          path="/admin"
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        />
      )}

      {/* Halaman default jika tidak ada rute yang cocok */}
      <Route path="*" element={<LandingPage />} />
    </Routes>
  );
}
