import { useForm } from "react-hook-form";
import useRegister from "../../../hooks/useRegister";

export default function RegisterForm() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const { onSubmit, serverError, isLoading, navigate } = useRegister();

  const passwordValue = watch("password", "");

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      {/* Full Name */}
      <div className="form-control mt-10">
        <label htmlFor="fullName" className="label">
          <span className="label-text font-medium">Nama Lengkap</span>
        </label>
        <input
          id="fullName"
          type="text"
          placeholder="Nama Lengkap"
          {...register("fullName", { required: "Nama lengkap wajib diisi." })}
          className={`input-style ${errors.fullName ? "input-error" : "border-secondary-5"}`}
        />
        {errors.fullName && (
          <p className="text-error-4 text-[10px] mt-1">
            {errors.fullName.message}
          </p>
        )}
      </div>

      {/* Phone Number and Address */}
      <div className="form-control flex lg:flex-row gap-3">
        <div className="w-full lg:w-1/2">
          <label htmlFor="address" className="label">
            <span className="label-text font-medium">Alamat</span>
          </label>
          <input
            id="address"
            type="text"
            placeholder="Alamat Lengkap"
            {...register("address", {
              required: "Alamat wajib diisi.",
              minLength: {
                value: 5,
                message: "Alamat harus lebih dari 5 karakter.",
              },
            })}
            className={`input-style ${errors.address ? "input-error" : "border-secondary-5"}`}
          />
          {errors.address && (
            <p className="text-error-4 text-[10px] mt-1">
              {errors.address.message}
            </p>
          )}
        </div>

        <div className="w-full lg:w-1/2 mt-6 lg:mt-0">
          <label htmlFor="phoneNumber" className="label">
            <span className="label-text font-medium">Nomor Telepon</span>
          </label>
          <input
            id="phoneNumber"
            type="text"
            placeholder="Nomor Telepon"
            {...register("phoneNumber", {
              required: "Nomor telepon wajib diisi.",
              pattern: {
                value: /^[0-9]{10,15}$/,
                message: "Nomor telepon tidak valid.",
              },
            })}
            className={`input-style ${errors.phoneNumber ? "input-error" : "border-secondary-5"}`}
          />
          {errors.phoneNumber && (
            <p className="text-error-4 text-[10px] mt-1">
              {errors.phoneNumber.message}
            </p>
          )}
        </div>
      </div>

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

      {/* Confirm Password */}
      <div className="form-control">
        <label htmlFor="confirmPassword" className="label">
          <span className="label-text font-medium">Konfirmasi Password</span>
        </label>
        <input
          id="confirmPassword"
          type="password"
          placeholder="Konfirmasi Password"
          {...register("confirmPassword", {
            required: "Konfirmasi password wajib diisi.",
            validate: (value) =>
              value === passwordValue || "Password tidak cocok.",
          })}
          className={`input-style ${errors.confirmPassword ? "input-error" : "border-secondary-5"}`}
        />
        {errors.confirmPassword && (
          <p className="text-error-4 text-[10px] mt-1">
            {errors.confirmPassword.message}
          </p>
        )}
      </div>

      {/* Server Error Message */}
      {serverError && (
        <div className="text-error-4 text-[12px] mt-2">{serverError}</div>
      )}

      {/* Submit Button with Spinner */}
      <div className="form-control mt-10">
        <button
          type="submit"
          className="btn bg-primary-5 w-full font-bold text-base text-neutral-5 mt-6"
          disabled={isLoading}
        >
          {isLoading ? (
            <span className="loading loading-spinner loading-md"></span>
          ) : (
            "Daftar"
          )}
        </button>
      </div>

      <div className="form-control">
        <p className="text-base text-center mt-6">
          Sudah punya akun?{" "}
          <span
            className="text-secondary-5 font-bold cursor-pointer"
            onClick={() => navigate("/login")}
          >
            Masuk
          </span>
        </p>
      </div>
    </form>
  );
}
