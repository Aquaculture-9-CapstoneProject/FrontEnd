import apiClient from "./apiClient";

export const fetchCheapestProducts = async () => {
  try {
    const response = await apiClient.get("/produk-termurah");
    return response.data;
  } catch (error) {
    const errorMessage =
      error.response?.data?.Message ||
      error.message ||
      "Gagal mengambil produk termurah.";
    console.error("Error fetching cheapest products:", errorMessage);
    throw errorMessage;
  }
};

export const fetchPopularProducts = async () => {
  try {
    const response = await apiClient.get("/produk-populer");
    return response.data;
  } catch (error) {
    const errorMessage =
      error.response?.data?.Message ||
      error.message ||
      "Gagal mengambil produk populer.";
    console.error("Error fetching popular products:", errorMessage);
    throw errorMessage;
  }
};

export const searchProducts = async (query) => {
  try {
    const response = await apiClient.get(`/products`, {
      params: { nama: query },
    });

    return response.data.product;
  } catch (error) {
    const errorMessage =
      error.response?.data?.Message || error.message || "Gagal mencari produk.";
    console.error("Error searching products:", errorMessage);
    throw errorMessage;
  }
};

export const fetchProductsByCategory = async (category) => {
  try {
    const response = await apiClient.get("/products", {
      params: { kategori: category },
    });
    return response.data.product;
  } catch (error) {
    const errorMessage =
      error.response?.data?.Message ||
      error.message ||
      "Gagal mengambil produk berdasarkan kategori.";
    console.error("Error fetching products by category:", errorMessage);
    throw errorMessage;
  }
};

export const allProducts = async () => {
  try {
    const response = await apiClient.get("/produk");
    return response.data.Produk;
  } catch (error) {
    const errorMessage =
      error.response?.data?.Message ||
      error.message ||
      "Gagal mengambil semua produk.";
    console.error("Error fetching products:", errorMessage);
    throw errorMessage;
  }
};

export const getProductDetail = async (productId) => {
  try {
    const response = await apiClient.get(`/products/${productId}`);
    return response.data.Produk;
  } catch (error) {
    const errorMessage =
      error.response?.data?.Message ||
      error.message ||
      "Gagal mengambil detail produk.";
    console.error("Error fetching product detail:", errorMessage);
    throw errorMessage;
  }
};

export const addToCart = async (productId, quantity) => {
  try {
    const response = await apiClient.post("/cart/tambah", {
      product_id: productId,
      quantity: quantity,
    });
    return response.data;
  } catch (error) {
    const errorMessage =
      error.response?.data?.Message ||
      error.message ||
      "Gagal menambahkan produk ke keranjang.";
    console.error("Error adding product to cart:", errorMessage);
    throw errorMessage;
  }
};

export const fetchCart = async () => {
  try {
    const response = await apiClient.get("/cart");
    return response.data;
  } catch (error) {
    const errorMessage =
      error.response?.data?.Message ||
      error.message ||
      "Gagal mengambil keranjang belanja.";
    console.error("Error fetching cart:", errorMessage);
    throw errorMessage;
  }
};

export const removeFromCart = async (productId) => {
  try {
    const response = await apiClient.delete(`/cart/${productId}`);
    return response.data;
  } catch (error) {
    const errorMessage =
      error.response?.data?.Message ||
      error.message ||
      "Gagal menghapus produk dari keranjang.";
    console.error("Error removing product from cart:", errorMessage);
    throw errorMessage;
  }
};

export const checkoutFromCart = async () => {
  try {
    const response = await apiClient.post("/cart/checkout");
    return response.data;
  } catch (error) {
    const errorMessage =
      error.response?.data?.Message ||
      error.message ||
      "Gagal melakukan checkout.";
    console.error("Error checking out:", errorMessage);
    throw errorMessage;
  }
};

export const fetchOrders = async () => {
  try {
    const response = await apiClient.get("orders/checkout");
    return response.data;
  } catch (error) {
    const errorMessage =
      error.response?.data?.Message ||
      error.message ||
      "Gagal mengambil data pesanan.";
    console.error("Error fetching orders:", errorMessage);
    throw errorMessage;
  }
};

export const orderFromCard = async (id, quantity) => {
  try {
    const response = await apiClient.post("/orders", {
      product_id: id,
      quantity: quantity,
    });
    return response.data;
  } catch (error) {
    const errorMessage =
      error.response?.data?.Message ||
      error.message ||
      "Gagal melakukan pesanan.";
    console.error("Error ordering from cart:", errorMessage);
    throw errorMessage;
  }
};

export const payment = async (id) => {
  try {
    const response = await apiClient.post("/payments", {
      orderID: id,
    });
    return response.data;
  } catch (error) {
    const errorMessage =
      error.response?.data?.Message ||
      error.message ||
      "Gagal melakukan pembayaran.";
    console.error("Error making payment:", errorMessage);
    throw errorMessage;
  }
};

export const fetchPaymentStatus = async (id) => {
  try {
    const response = await apiClient.get(`/payments/${id}/status`);
    return response.data;
  } catch (error) {
    const errorMessage =
      error.response?.data?.Message ||
      error.message ||
      "Gagal mengambil status pembayaran.";
    console.error("Error fetching payment status:", errorMessage);
    throw errorMessage;
  }
};

export const fetchPaymentDetail = async (id) => {
  try {
    const response = await apiClient.get(`/payments/detail/${id}`);
    return response.data;
  } catch (error) {
    const errorMessage =
      error.response?.data?.Message ||
      error.message ||
      "Gagal mengambil detail pembayaran.";
    console.error("Error fetching payment detail:", errorMessage);
    throw errorMessage;
  }
};

export const fetchOrder = async () => {
  try {
    const response = await apiClient.get("/payments/detailorder");
    return response.data;
  } catch (error) {
    const errorMessage =
      error.response?.data?.Message ||
      error.message ||
      "Gagal mengambil data pesanan.";
    console.error("Error fetching orders:", errorMessage);
    throw errorMessage;
  }
};

export const fetchOrderDetail = async (id) => {
  try {
    const response = await apiClient.get(`/payments/detail/${id}`);
    return response.data;
  } catch (error) {
    const errorMessage =
      error.response?.data?.Message ||
      error.message ||
      "Gagal mengambil detail pesanan.";
    console.error("Error fetching order detail:", errorMessage);
    throw errorMessage;
  }
};
