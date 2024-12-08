import { Routes, Route, Navigate } from "react-router-dom";
import useUserStore from "../store/useUsersStore";
import Login from "../components/auth/login/Login";
import Error from "../components/common/Error";
import Register from "../components/auth/register/Register";
import LandingPage from "../components/landingPage/LandingPage";
import UserRoutes from "./UserRoutes";
import AdminRoutes from "./AdminRoutes";

export default function AppRoutes() {
  const { user } = useUserStore();

  return (
    <Routes>
      {/* Rute untuk halaman umum */}
      <Route path="/" element={<LandingPage />} />

      {/* Rute untuk login dan registrasi */}
      <Route
        path="/login"
        element={
          user ? (
            <Navigate
              to={user.role === "admin" ? "/dashboard" : "/home"}
              replace
            />
          ) : (
            <Login />
          )
        }
      />
      <Route
        path="/register"
        element={
          user ? (
            <Navigate
              to={user.role === "admin" ? "/dashboard" : "/home"}
              replace
            />
          ) : (
            <Register />
          )
        }
      />

      {/* Rute untuk Home (user) */}
      {/* <UserRoutes /> */}
      {UserRoutes()}

      {/* Rute untuk Dashboard (admin) */}
      {/* <AdminRoutes /> */}
      {AdminRoutes()}

      {/* Rute untuk halaman Error */}
      <Route path="/error" element={<Error />} />

      {/* Rute tidak ditemukan */}
      <Route path="*" element={<Error />} />
    </Routes>
  );
}
