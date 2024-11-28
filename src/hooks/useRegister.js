import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { registerServices } from "../services/authServices";

export default function useRegister() {
  const [serverError, setServerError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const onSubmit = async (data) => {
    setIsLoading(true);
    try {
      await registerServices(data);
      // alert("Registrasi berhasil! Silakan login.");
      navigate("/login");
    } catch (error) {
      console.error("Error registrasi:", error);
      setServerError(
        error || "Terjadi kesalahan saat registrasi. Silakan coba lagi.",
      );
    } finally {
      setIsLoading(false);
    }
  };

  return {
    onSubmit,
    serverError,
    isLoading,
    navigate,
  };
}
