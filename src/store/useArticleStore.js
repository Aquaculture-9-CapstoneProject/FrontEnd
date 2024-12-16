import { create } from "zustand";
import apiClient from "../services/apiClient";

const useArticleStore = create((set) => ({
  topArticles: [],
  latestArticles: [],
  articles: [],
  isLoading: false,
  error: null,
  pagination: null,
  selectedArticle: null,

  fetchTopArticles: async () => {
    set({ isLoading: true, error: null });

    try {
      const response = await apiClient.get("/artikel/top");
      const articles = response.data.data;
      set({ topArticles: articles, isLoading: false });
    } catch (err) {
      console.error(err);
      set({ error: err.message, isLoading: false });
    }
  },

  fetchLatestArticles: async () => {
    set({ isLoading: true, error: null });

    try {
      const response = await apiClient.get("/artikel");
      const articles = response.data.data.slice(0, 6); // Ambil hanya 6 artikel
      set({ latestArticles: articles, isLoading: false });
    } catch (err) {
      console.error(err);
      set({ error: err.message, isLoading: false });
    }
  },

  fetchAllArticles: async (page) => {
    set({ isLoading: true, error: null });
  
    try {
      const response = await apiClient.get(`/artikel/page/${page}`);
      const { data, pagination } = response.data;
      set({ latestArticles: data, isLoading: false, pagination });
    } catch (err) {
      console.error(err);
      set({ error: err.message, isLoading: false });
    }
  },

  fetchArticleById: async (ID) => {
    set({ isLoading: true, error: null });
    try {
      const response = await apiClient.get(`/artikel/${ID}`);
      const article = response.data.data;
      set({ selectedArticle: article, isLoading: false });
    } catch (err) {
      console.error(err);
      set({ error: err.message, isLoading: false });
    }
  },

  fetchFilteredArticles: async (kategori, page = 1) => {
    set({ isLoading: true, error: null });
    try {
      const response = await apiClient.get(`/artikel?kategori=${kategori}&page=${page}`);
      const { data, pagination } = response.data;
      set({ articles: data, pagination, isLoading: false });
    } catch (err) {
      console.error(err);
      set({ error: err.message, isLoading: false });
    }
  },  
}));

export default useArticleStore;
