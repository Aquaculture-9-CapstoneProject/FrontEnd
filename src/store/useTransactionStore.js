import { create } from 'zustand';
import apiClient from '../services/apiClient';

const useTransactionStore = create((set) => ({
  transactions: [],
  isLoading: false,
  error: null,
  fetchTransactions: async () => {
    set({ isLoading: true, error: null });
    try {
      const response = await apiClient.get('/admin/admintransaksi');
      set({ transactions: response.data.data || [], isLoading: false });
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
}));

export default useTransactionStore;
