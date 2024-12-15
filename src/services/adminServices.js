import apiClient from "./apiClient";
import apiForm from "./apiForm";

// Fungsi untuk mengambil total pendapatan bulan ini
export const totalIncome = async () => {
  try {
    const response = await apiClient.get("/admin/totalpendapatan/bulan");
    return response.data;
  } catch (error) {
    const errorMessage =
      error.response?.data?.Message ||
      error.message ||
      "Gagal mengambil total pendapatan.";
    console.error("Error fetching total income:", errorMessage);
    throw errorMessage;
  }
};

// Fungsi untuk mengambil total pesanan bulan ini
export const totalOrders = async () => {
  try {
    const response = await apiClient.get("/admin/totalpesanan/bulan");
    return response.data;
  } catch (error) {
    const errorMessage =
      error.response?.data?.message ||
      error.message ||
      "Gagal mengambil total pesanan.";
    console.error("Error fetching total orders:", errorMessage);
    throw errorMessage;
  }
};

// Fungsi untuk mengambil total produk
export const totalProducts = async () => {
  try {
    const response = await apiClient.get("/admin/totalproduk");
    return response.data;
  } catch (error) {
    const errorMessage =
      error.response?.data?.message ||
      error.message ||
      "Gagal mengambil total produk.";
    console.error("Error fetching total products:", errorMessage);
    throw errorMessage;
  }
};

// Fungsi untuk mengambil total artikel
export const totalArticles = async () => {
  try {
    const response = await apiClient.get("/admin/totalartikel");
    return response.data;
  } catch (error) {
    const errorMessage =
      error.response?.data?.message ||
      error.message ||
      "Gagal mengambil total artikel.";
    console.error("Error fetching total articles:", errorMessage);
    throw errorMessage;
  }
};

// Fungsi untuk mengambil total pendapatan (dummy backend)
export const totalIncomeDummy = async () => {
  try {
    const response = await apiClient.get("/admin/totalpendapatan");
    return response.data;
  } catch (error) {
    const errorMessage =
      error.response?.data?.message ||
      error.message ||
      "Gagal mengambil total pendapatan (dummy).";
    console.error("Error fetching total income (dummy):", errorMessage);
    throw errorMessage;
  }
};

// Fungsi untuk mengambil status transaksi
export const transactionStatus = async () => {
  try {
    const response = await apiClient.get("/admin/statustransaksi");
    return response.data;
  } catch (error) {
    const errorMessage =
      error.response?.data?.message ||
      error.message ||
      "Gagal mengambil status transaksi.";
    console.error("Error fetching transaction status:", errorMessage);
    throw errorMessage;
  }
};

// Fungsi untuk mengambil jumlah pesanan yang dikirim
export const ordersShipped = async () => {
  try {
    const response = await apiClient.get("/admin/totalpesanan/dikirim");
    return response.data;
  } catch (error) {
    const errorMessage =
      error.response?.data?.message ||
      error.message ||
      "Gagal mengambil jumlah pesanan yang dikirim.";
    console.error("Error fetching orders shipped:", errorMessage);
    throw errorMessage;
  }
};

// Fungsi untuk mengambil jumlah pesanan yang selesai
export const ordersCompleted = async () => {
  try {
    const response = await apiClient.get("/admin/totalpesanan/selesai");
    return response.data;
  } catch (error) {
    const errorMessage =
      error.response?.data?.message ||
      error.message ||
      "Gagal mengambil jumlah pesanan yang selesai.";
    console.error("Error fetching orders completed:", errorMessage);
    throw errorMessage;
  }
};

// Fungsi untuk mengambil kategori dengan produk terbanyak
export const topCategories = async () => {
  try {
    const response = await apiClient.get("/admin/produkterbanyak?limit=5");
    return response.data;
  } catch (error) {
    const errorMessage =
      error.response?.data?.message ||
      error.message ||
      "Gagal mengambil kategori dengan produk terbanyak.";
    console.error("Error fetching top categories:", errorMessage);
    throw errorMessage;
  }
};

export const getAllProduct = async (page) => {
  try {
    const response = await apiClient.get(`/admin/products/page/${page}`);
    return response.data;
  } catch (error) {
    const errorMessage =
      error.response?.data?.message ||
      error.message ||
      "Gagal mengambil artikel.";
    console.error("Error fetching articles:", errorMessage);
    throw errorMessage;
  }
};

export const filterProduct = async (categories) => {
  try {
    const response = await apiClient.get(
      `/admin/products?kategori=${categories}`,
    );
    return response.data;
  } catch (error) {
    const errorMessage =
      error.response?.data?.message ||
      error.message ||
      "Gagal mengambil artikel.";
    console.error("Error fetching articles:", errorMessage);
    throw errorMessage;
  }
};

export const deleteProduct = async (id) => {
  try {
    const response = await apiClient.delete(`/admin/products/${id}`);
    return response.data;
  } catch (error) {
    const errorMessage =
      error.response?.data?.message ||
      error.message ||
      "Gagal menghapus produk.";
    console.error("Error deleting product:", errorMessage);
    throw errorMessage;
  }
};

export const addProduct = async (formData) => {
  try {
    const response = await apiForm.post("/admin/products", formData);

    return response.data;
  } catch (error) {
    if (error.response) {
      console.error("Error: ", error.response.data);
      alert(`Gagal menambahkan produk: ${error.response.data.message}`);
    } else {
      console.error("Request Error: ", error.message);
    }
  }
};

export const updateProduct = async (id, formData) => {
  try {
    const response = await apiForm.put(`/admin/products/${id}`, formData);

    return response.data;
  } catch (error) {
    if (error.response) {
      console.error("Error: ", error.response.data);
      alert(`Gagal mengupdate produk: ${error.response.data.message}`);
    } else {
      console.error("Request Error: ", error.message);
    }
  }
};
