import { create } from 'zustand';
import apiClient from '../services/apiClient';

const useOrderStore = create((set) => ({
    orders: [],
    isLoading: false,
    error: null,
    currentPage: 1,
    totalPages: 1,
    totalItems: 0,
    limit: 10,

    fetchOrders: async (page = 1, limit = 10) => {
        set({ isLoading: true, error: null });
        try {
          const response = await apiClient.get(`/admin/adminpesanan?page=${page}&per_page=${limit}`);
    
          const orders = response.data.data || []; // Ambil data pesanan
          const pagination = response.pagination || {}; // Ambil data pagination
    
          set({
            orders: orders,
            currentPage: pagination.page || 1,
            totalPages: pagination.total_pages || 1,
            totalItems: pagination.total || 0,
            isLoading: false,
          });
        } catch (error) {
          console.error('Error fetching orders:', error);
          set({ error: error.message, isLoading: false });
        }
      },
    }));

export default useOrderStore;