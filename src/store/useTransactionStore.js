import { create } from 'zustand';
import apiClient from '../services/apiClient';

const useTransactionStore = create((set) => ({
  transactions: [],
  isLoading: false,
  error: null,
  currentPage: 1,
  totalPages: 1,
  totalItems: 0,
  limit: 10,

  fetchTransactions: async (page = 1, limit = 10) => {
    set({ isLoading: true, error: null });
    try {
      const response = await apiClient.get(`/admin/admintransaksi?page=${page}&per_page=${limit}`);

      const transactions = response.data.data.data || []; // Ambil data transaksi
      const pagination = response.data.data.pagination || {}; // Ambil data pagination

      set({
        transactions: transactions,
        currentPage: pagination.CurrentPage || 1,
        totalPages: pagination.TotalPages || 1,
        totalItems: pagination.TotalItems || 0,
        isLoading: false,
      });
    } catch (error) {
      console.error('Error fetching transactions:', error);
      set({ error: error.message, isLoading: false });
    }
  },

  deleteTransaction: async (id) => {
    set({ isLoading: true, error: null });
    try {
      console.log('ID to delete:', id);
      await apiClient.delete(`/admin/hapustransaksi/${id}`);
      set((state) => ({
        transactions: state.transactions.filter((t) => t.id !== id),
        isLoading: false,
      }));
    } catch (error) {
      console.error('Error deleting transaction:', error);
      set({ error: error.message, isLoading: false });
    }
  },

  fetchTransactionsByStatus: async (status) => {
    set({ isLoading: true, error: null });
    try {
      const response = await apiClient.get(`/admin/payment/status?status=${status}`);
      set({
        transactions: response.data.data || [],
        isLoading: false,
      });
    } catch (error) {
      console.error('Error fetching transactions by status:', error);
      set({ error: error.message, isLoading: false });
    }
  },
}));

export default useTransactionStore;
