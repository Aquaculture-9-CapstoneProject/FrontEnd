import { Routes, Route, Navigate } from "react-router-dom";
import Login from "../components/auth/login/Login";
import ProtectedRoute from "./ProtectedRoute";
import Dashboard from "../pages/admin/Dashboard";
import Error from "../components/common/Error";
import Register from "../components/auth/register/Register";
import LandingPage from "../components/landingPage/LandingPage";
import HomePage from "../pages/users/HomePage";
import Article from "../components/users/article/Article";
import AllArticles from "../components/users/article/AllArticles";
import FilteredArticles from "../components/users/article/FilteredArticles";
import useUserStore from "../store/useUsersStore";

export default function AppRoutes() {
  const { user } = useUserStore();

  return (
    <Routes>
      {/* Rute untuk halaman umum (Landing Page) */}
      <Route path="/" element={<LandingPage />} />

      {/* Rute untuk login dan registrasi hanya jika user belum login */}
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

      {/* Rute untuk halaman Home (hanya untuk role "user") */}
      <Route
        path="/home"
        element={
          user ? ( // Jika sudah login
            user.role === "user" ? (
              <HomePage />
            ) : (
              <Navigate to="/error" replace /> // Admin tidak bisa akses /home
            )
          ) : (
            <Navigate to="/" replace /> // Jika belum login, arahkan ke /
          )
        }
      />

      <Route path="/article" element={<Article />} />
      <Route path="/article/latest" element={<AllArticles />} />
      <Route path="/article/:topic" element={<FilteredArticles />} />

      {/* Rute untuk halaman Article (hanya untuk role "user") */}
      {/* <Route
        path="/article"
        element={
          user ? ( // Jika sudah login
            user.role === "user" ? (
              <Article />
            ) : (
              <Navigate to="/error" replace /> // Admin tidak bisa akses /article
            )
          ) : (
            <Navigate to="/" replace /> // Jika belum login, arahkan ke /
          )
        }
      /> */}

      {/* Rute untuk halaman Dashboard (hanya untuk role "admin") */}
      <Route
        path="/dashboard"
        element={
          user ? ( // Jika sudah login
            user.role === "admin" ? (
              <ProtectedRoute>
                <Dashboard />
              </ProtectedRoute>
            ) : (
              <Navigate to="/error" replace /> // User tidak bisa akses /dashboard
            )
          ) : (
            <Navigate to="/" replace /> // Jika belum login, arahkan ke /
          )
        }
      />

      {/* Rute untuk halaman Error */}
      <Route path="/error" element={<Error />} />

      {/* Rute yang tidak ditemukan */}
      <Route path="*" element={<Error />} />
    </Routes>
  );
}
