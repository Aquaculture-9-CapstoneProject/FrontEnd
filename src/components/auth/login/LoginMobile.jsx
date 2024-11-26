import LoginForm from "./LoginForm";

export default function LoginMobile({
  handleSubmit,
  email,
  setEmail,
  password,
  setPassword,
}) {
  return (
    <div className="lg:hidden flex flex-col justify-center h-screen px-10 bg-white">
      {/* Logo */}
      <div className="flex gap-2 items-center mb-6">
        <img src="/logo.svg" alt="logo" />
        <h1 className="text-2xl font-semibold text-primary-4 w-1">Blue Bay</h1>
      </div>

      {/* Title */}
      <div className="mb-6">
        <h1 className="text-xl font-bold mb-2">Login</h1>
        <p className="text-neutral-1 text-sm">
          Selamat datang kembali! Silakan masuk untuk melanjutkan.
        </p>
      </div>

      {/* Form */}
      <LoginForm
        handleSubmit={handleSubmit}
        email={email}
        setEmail={setEmail}
        password={password}
        setPassword={setPassword}
      />
    </div>
  );
}
