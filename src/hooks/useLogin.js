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

      const userData = {
        userID: decodedToken.userID,
        role: decodedToken.role,
        token: response.token,
        message: response.message,
      };

      if (response.user) {
        userData.email = response.user.email;
        userData.name = response.user.nama;
        userData.address = response.user.alamat;
        userData.phone = response.user.noTelpon;
      }

      setUser(userData);

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
