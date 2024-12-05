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
