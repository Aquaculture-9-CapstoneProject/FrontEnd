import { create } from "zustand";
import { showToast } from "../utils/toastUtils";
import {
  deleteArticle,
  filterArticle,
  getAllArticle,
} from "../services/adminServices";

const useAdminArticleStore = create((set, get) => ({
  articles: [],
  currentPage: 1,
  totalPages: 1,
  totalItems: 0,
  isLoading: false,
  error: null,
  loadingDelete: null,

  fetchArticles: async (page = 1) => {
    set({ isLoading: true, error: null });
    try {
      const response = await getAllArticle(page);
      const { data, pagination } = response;
      set({
        articles: data,
        currentPage: pagination.CurrentPage,
        totalPages: pagination.TotalPages,
        totalItems: pagination.TotalItems,
        isLoading: false,
      });
    } catch (error) {
      set({ error: error.message, isLoading: false });
    }
  },

  deleteArticleById: async (id) => {
    set({ loadingDelete: id });
    try {
      await deleteArticle(id);
      const updatedArticles = get().articles.filter(
        (article) => article.ID !== id,
      );
      set({ articles: updatedArticles });
    } catch (error) {
      set({ error: error.message });
    } finally {
      set({ loadingDelete: null });
      showToast("Artikel berhasil dihapus");
    }
  },

  setCurrentPage: (page) => set({ currentPage: page }),

  getCurrentArticles: () => {
    return (state) => {
      const startIndex = (state.currentPage - 1) * state.articlesPerPage;
      const endIndex = startIndex + state.articlesPerPage;
      return state.articles.slice(startIndex, endIndex);
    };
  },

  getArticleDetails: (id) => {
    return (state) => state.articles.find((article) => article.ID === id);
  },

  addArticleToStore: (newArticle) => {
    set((state) => ({
      articles: [...state.articles, newArticle],
    }));
  },

  updateArticleInStore: (updatedArticle) => {
    set((state) => ({
      articles: state.articles.map((article) =>
        article.ID === updatedArticle.ID ? updatedArticle : article,
      ),
    }));
  },

  filterArticlesByCategory: async (category) => {
    set({ isLoading: true, error: null });
    try {
      const response = await filterArticle(category);
      const { data, pagination } = response;
      set({
        articles: data,
        currentPage: pagination.CurrentPage,
        totalPages: pagination.TotalPages,
        totalItems: pagination.TotalItems,
        isLoading: false,
      });
    } catch (error) {
      set({ error: error.message, isLoading: false });
    }
  },
}));

export default useAdminArticleStore;
