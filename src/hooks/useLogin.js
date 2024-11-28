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

      const decodedToken = jwtDecode(response.Token);

      setUser({
        userID: decodedToken.userID,
        role: decodedToken.role,
        token: response.Token,
        email: response.Email,
        name: response.Nama,
        address: response.Alamat,
        phone: response.Notelpon,
        message: response.Message,
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
