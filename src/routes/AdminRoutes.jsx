import { Route } from "react-router-dom";
import ProtectedRoute from "./ProtectedRoute";
import TransactionPage from "../pages/admin/TransactionPage";
import DashboardPage from "../pages/admin/DashboardPage";
import OrderPage from "../pages/admin/OrderPage";
import ProductPage from "../pages/admin/ProductPage";
import ArticlePage from "../pages/admin/ArticlePage";
import { Fragment } from "react";

export default function AdminRoutes() {
  return (
    <Fragment>
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
    </Fragment>
  );
}
