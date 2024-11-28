import axios from "axios";

const API_URL = import.meta.env.VITE_API_URL;

export const loginServices = async (email, password) => {
  try {
    const response = await axios.post(
      `${API_URL}/login`,
      { email, password },
      {
        headers: { "Content-Type": "application/json" },
        withCredentials: true,
      },
    );
    return response.data;
  } catch (error) {
    throw error.response?.data?.message || error.message || "Login gagal.";
  }
};

export const registerServices = async (data) => {
  try {
    const response = await axios.post(
      `${API_URL}/register`,
      {
        namalengkap: data.fullName,
        alamat: data.address,
        notelpon: data.phoneNumber,
        email: data.email,
        password: data.password,
        konfirpass: data.confirmPassword,
      },
      {
        headers: { "Content-Type": "application/json" },
      },
    );
    return response.data;
  } catch (error) {
    const errorMessage =
      error.response?.data?.error || error.message || "Registrasi gagal.";
    console.error("Error registrasi:", errorMessage);
    throw errorMessage;
  }
};
