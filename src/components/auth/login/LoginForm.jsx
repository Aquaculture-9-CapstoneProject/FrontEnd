export default function LoginForm({
  handleSubmit,
  email,
  setEmail,
  password,
  setPassword,
}) {
  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      {/* Email */}
      <div className="form-control mt-10">
        <label htmlFor="email" className="label">
          <span className="label-text font-medium">Email</span>
        </label>
        <input
          id="email"
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="input input-bordered w-full"
          required
        />
      </div>
      {/* Password */}
      <div className="form-control">
        <label htmlFor="password" className="label">
          <span className="label-text font-medium">Password</span>
        </label>
        <input
          id="password"
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="input input-bordered w-full"
          required
        />
      </div>
      {/* Lupa Password */}
      <p className="text-[10px] text-neutral-1 text-right hover:text-primary-1 cursor-pointer">
        Lupa password?
      </p>

      <div className="form-control mt-10">
        {/* Submit Button */}
        <button
          type="submit"
          className="btn bg-primary-5 w-full font-bold text-base text-neutral-5 mt-6"
        >
          Masuk
        </button>
        {/* Registrasi */}
        <p className="text-base text-center mt-6">
          Belum punya akun?{" "}
          <span className="text-secondary-5 font-bold cursor-pointer">
            Buat akun baru
          </span>
        </p>
      </div>
    </form>
  );
}
