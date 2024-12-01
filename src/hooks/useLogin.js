import { useNavigate } from "react-router-dom";
import useUserStore from "../store/useUsersStore";
import { useState } from "react";
import { loginServices } from "../services/authServices";
import { jwtDecode } from "jwt-decode";

export default function useLogin() {
  const navigate = useNavigate();
  const { setUser } = useUserStore();
  const [isError, setIsError] = useState("");
  const [loading, setLoading] = useState(false);

  const onSubmit = async (data) => {
    try {
      setLoading(true);
      const response = await loginServices(data.email, data.password);

      const decodedToken = jwtDecode(response.token);

      setUser({
        userID: decodedToken.userID,
        role: decodedToken.role,
        token: response.token,
        email: response.user.email,
        name: response.user.nama,
        address: response.user.alamat,
        phone: response.user.noTelpon,
        message: response.message,
      });

      if (decodedToken.role === "admin") {
        navigate("/dashboard");
      } else {
        navigate("/home");
      }
    } catch (error) {
      console.error("Login failed:", error);
      setIsError("Waduh, email atau password-nya salah nih. Coba lagi ya!");
    } finally {
      setLoading(false);
    }
  };

  const handleForgotPassword = () => {
    console.log("Pergi ke halaman lupa password.");
    navigate("/forgot-password");
  };

  return { isError, loading, onSubmit, handleForgotPassword, navigate };
}
