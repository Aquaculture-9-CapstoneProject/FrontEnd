import apiClient from "./apiClient";

export const loginServices = async (email, password) => {
  try {
    const response = await apiClient.post("/login", { email, password });
    return response.data;
  } catch (error) {
    throw error.response?.data?.Message || error.message || "Login gagal.";
  }
};

export const registerServices = async (data) => {
  try {
    const response = await apiClient.post("/register", {
      namalengkap: data.fullName,
      alamat: data.address,
      notelpon: data.phoneNumber,
      email: data.email,
      password: data.password,
      konfirpass: data.confirmPassword,
    });
    return response.data;
  } catch (error) {
    const errorMessage =
      error.response?.data?.error || error.message || "Registrasi gagal.";
    console.error("Error registrasi:", errorMessage);
    throw errorMessage;
  }
};
