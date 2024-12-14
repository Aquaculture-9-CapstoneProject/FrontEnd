import { create } from "zustand";
import {
  topCategories,
  totalIncome,
  totalOrders,
  totalProducts,
  totalArticles,
  ordersCompleted,
  ordersShipped,
} from "../services/adminServices";
import { fetchPopularProducts } from "../services/productServices";

const useDashboardStore = create((set) => ({
  loading: true,
  error: null,
  data: {
    stats: {
      revenue: null,
      orders: null,
      products: null,
      articles: null,
    },
    categories: [],
    popularProducts: [],
    overview: {
      shipped: null,
      completed: null,
    },
  },
  fetchDashboardData: async () => {
    set({ loading: true, error: null });
    try {
      const [
        categoryResponse,
        incomeData,
        ordersData,
        productsData,
        articlesData,
        shippedOrders,
        completedOrders,
        popularProducts,
      ] = await Promise.all([
        topCategories(),
        totalIncome(),
        totalOrders(),
        totalProducts(),
        totalArticles(),
        ordersShipped(),
        ordersCompleted(),
        fetchPopularProducts(),
      ]);

      set({
        data: {
          stats: {
            revenue: incomeData.totalPendapatan || "0",
            orders: ordersData.totalPesanan || "0",
            products: productsData.totalProduk || "0",
            articles: articlesData.totalArtikel || "0",
          },
          categories: categoryResponse.Produk.map((item) => ({
            id: item.ID,
            category: item.Kategori,
            productCount: item.Stok,
          })),
          popularProducts: popularProducts.data,
          overview: {
            shipped: `${shippedOrders.totalPesananDikrim} pesanan`,
            completed: `${completedOrders.totalPesananDiterima} pesanan`,
          },
        },
        loading: false,
      });
    } catch (err) {
      set({ error: err.message, loading: false });
    }
  },
}));

export default useDashboardStore;
