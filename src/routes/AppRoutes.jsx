import { Routes, Route, Navigate } from "react-router-dom";
import Login from "../components/auth/login/Login";
import ProtectedRoute from "./ProtectedRoute";
import Error from "../components/common/Error";
import Register from "../components/auth/register/Register";
import LandingPage from "../components/landingPage/LandingPage";
import HomePage from "../pages/users/HomePage";
import Article from "../components/users/article/Article";
import AllArticles from "../components/users/article/AllArticles";
import FilteredArticles from "../components/users/article/FilteredArticles";
import ArticleContent from "../components/users/article/ArticleContent";
import useUserStore from "../store/useUsersStore";
import ProductDetail from "../components/users/productDetails/ProductDetail";
import Cart from "../components/users/cart/Cart";
import Search from "../components/users/search/Search";
import Checkout from "../components/users/checkout/Checkout";
import Payment from "../components/users/payment/Payment";
import PaymentSucces from "../components/users/paymentSucces/PaymentSucces";
import PaymentFailed from "../components/users/paymentFailed/PaymentFailed";
import TransactionPage from "../pages/admin/TransactionPage";
import DashboardPage from "../pages/admin/DashboardPage";
import OrderPage from "../pages/admin/OrderPage";
import ProductPage from "../pages/admin/ProductPage";
import ArticlePage from "../pages/admin/ArticlePage";
import Order from "../components/users/order/Order";
import OrderDetail from "../components/users/orderDetail/OrderDetail";

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
        path="/checkout"
        element={
          <ProtectedRoute allowedRole="user">
            <Checkout />
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

      <Route
        path="/article"
        element={
          <ProtectedRoute allowedRole="user">
            <Article />
          </ProtectedRoute>
        }
      />
      <Route
        path="/article-latest"
        element={
          <ProtectedRoute allowedRole="user">
            <AllArticles />
          </ProtectedRoute>
        }
      />
      <Route
        path="/article-topic"
        element={
          <ProtectedRoute allowedRole="user">
            <FilteredArticles />
          </ProtectedRoute>
        }
      />
      <Route
        path="/article-content"
        element={
          <ProtectedRoute allowedRole="user">
            <ArticleContent />
          </ProtectedRoute>
        }
      />

      <Route
        path="/payment"
        element={
          <ProtectedRoute allowedRole="user">
            <Payment />
          </ProtectedRoute>
        }
      />

      <Route
        path="/payment-succes"
        element={
          <ProtectedRoute allowedRole="user">
            <PaymentSucces />
          </ProtectedRoute>
        }
      />

      <Route
        path="/payment-failed"
        element={
          <ProtectedRoute allowedRole="user">
            <PaymentFailed />
          </ProtectedRoute>
        }
      />

      <Route
        path="/order"
        element={
          <ProtectedRoute allowedRole="user">
            <Order />
          </ProtectedRoute>
        }
      />

      <Route
        path="/order-detail"
        element={
          <ProtectedRoute allowedRole="user">
            <OrderDetail />
          </ProtectedRoute>
        }
      />

      {/* Rute untuk Dashboard (admin) */}
      <Route
        path="/dashboard"
        element={
          <ProtectedRoute allowedRole="admin">
            <DashboardPage />
          </ProtectedRoute>
        }
      />

      <Route
        path="/transaksi"
        element={
          <ProtectedRoute allowedRole="admin">
            <TransactionPage />
          </ProtectedRoute>
        }
      />

      <Route
        path="/pesanan"
        element={
          <ProtectedRoute allowedRole="admin">
            <OrderPage />
          </ProtectedRoute>
        }
      />

      <Route
        path="/produk"
        element={
          <ProtectedRoute allowedRole="admin">
            <ProductPage />
          </ProtectedRoute>
        }
      />

      <Route
        path="/artikel"
        element={
          <ProtectedRoute allowedRole="admin">
            <ArticlePage />
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
