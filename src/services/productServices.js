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
