import { useForm } from "react-hook-form";
import useLogin from "../../../hooks/useLogin";

export default function LoginForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const { isError, loading, onSubmit, handleForgotPassword, navigate } =
    useLogin();

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      {/* Email */}
      <div className="form-control mt-10">
        <label htmlFor="email" className="label">
          <span className="label-text font-medium">Email</span>
        </label>
        <input
          id="email"
          type="email"
          placeholder="example@gmail.com"
          {...register("email", {
            required: "Email wajib diisi.",
            pattern: {
              value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
              message: "Format email tidak valid.",
            },
          })}
          className={`input-style ${errors.email ? "input-error" : "border-secondary-5"}`}
        />
        {errors.email && (
          <p className="text-error-4 text-[10px] mt-1">
            {errors.email.message}
          </p>
        )}
      </div>

      {/* Password */}
      <div className="form-control">
        <label htmlFor="password" className="label">
          <span className="label-text font-medium">Password</span>
        </label>
        <input
          id="password"
          type="password"
          placeholder="Minimal 6 karakter"
          {...register("password", {
            required: "Password wajib diisi.",
            minLength: {
              value: 6,
              message: "Password harus minimal 6 karakter.",
            },
          })}
          className={`input-style ${errors.password ? "input-error" : "border-secondary-5"}`}
        />
        {errors.password && (
          <p className="text-error-4 text-[10px] mt-1">
            {errors.password.message}
          </p>
        )}
      </div>

      {/* Lupa Password */}
      <div className="flex justify-between items-center">
        {isError && <p className="text-error-4 text-[10px] mt-1">{isError}</p>}
        <p className="forgot-password ml-auto" onClick={handleForgotPassword}>
          Lupa password?
        </p>
      </div>

      <div className="form-control mt-10">
        {/* Submit Button */}
        <button type="submit" className="button-style" disabled={loading}>
          {loading ? (
            <span className="loading loading-spinner loading-md"></span>
          ) : (
            "Masuk"
          )}
        </button>
        {/* Registrasi */}
        <p className="text-base text-center mt-6">
          Belum punya akun?{" "}
          <span
            className="text-secondary-5 font-bold cursor-pointer"
            onClick={() => navigate("/register")}
          >
            Buat akun baru
          </span>
        </p>
      </div>
    </form>
  );
}
