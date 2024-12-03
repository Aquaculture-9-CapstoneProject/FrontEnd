import { Routes, Route, Navigate } from "react-router-dom";
import Login from "../components/auth/login/Login";
import ProtectedRoute from "./ProtectedRoute";
import Dashboard from "../pages/admin/Dashboard";
import Error from "../components/common/Error";
import Register from "../components/auth/register/Register";
import LandingPage from "../components/landingPage/LandingPage";
import HomePage from "../pages/users/HomePage";
import useUserStore from "../store/useUsersStore";
import ProductDetail from "../components/users/productDetails/ProductDetail";
import Cart from "../components/users/cart/Cart";
import Search from "../components/users/search/Search";

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
      <Route
        path="/home"
        element={
          <ProtectedRoute allowedRole="user">
            <HomePage />
          </ProtectedRoute>
        }
      />

      <Route
        path="/detail"
        element={
          <ProtectedRoute allowedRole="user">
            <ProductDetail />
          </ProtectedRoute>
        }
      />

      <Route
        path="/cart"
        element={
          <ProtectedRoute allowedRole="user">
            <Cart />
          </ProtectedRoute>
        }
      />

      <Route
        path="/search"
        element={
          <ProtectedRoute allowedRole="user">
            <Search />
          </ProtectedRoute>
        }
      />

      {/* Rute untuk Dashboard (admin) */}
      <Route
        path="/dashboard"
        element={
          <ProtectedRoute allowedRole="admin">
            <Dashboard />
          </ProtectedRoute>
        }
      />

      {/* Rute untuk halaman Error */}
      <Route path="/error" element={<Error />} />

      {/* Rute tidak ditemukan */}
      <Route path="*" element={<Error />} />
    </Routes>
  );
}
