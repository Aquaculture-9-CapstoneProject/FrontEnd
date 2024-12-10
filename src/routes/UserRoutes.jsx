import { Route } from "react-router-dom";
import ProtectedRoute from "./ProtectedRoute";
import HomePage from "../pages/users/HomePage";
import Article from "../components/users/article/Article";
import AllArticles from "../components/users/article/AllArticles";
import FilteredArticles from "../components/users/article/FilteredArticles";
import ArticleContent from "../components/users/article/ArticleContent";
import ProductDetail from "../components/users/productDetails/ProductDetail";
import Cart from "../components/users/cart/Cart";
import Search from "../components/users/search/Search";
import Checkout from "../components/users/checkout/Checkout";
import Payment from "../components/users/payment/Payment";
import PaymentSucces from "../components/users/paymentSucces/PaymentSucces";
import PaymentFailed from "../components/users/paymentFailed/PaymentFailed";
import Order from "../components/users/order/Order";
import OrderDetail from "../components/users/orderDetail/OrderDetail";
import { Fragment } from "react";
import Profile from "../components/users/profile/Profile";

export default function UserRoutes() {
  return (
    <Fragment>
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
        path="/products"
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

      <Route
        path="/profile"
        element={
          <ProtectedRoute allowedRole="user">
            <Profile />
          </ProtectedRoute>
        }
      />
    </Fragment>
  );
}
