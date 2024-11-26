import LoginForm from "./LoginForm";

export default function LoginDesktop({
  handleSubmit,
  email,
  setEmail,
  password,
  setPassword,
}) {
  return (
    <div className="hidden lg:flex h-screen w-full bg-[url('/bg-login.png')] bg-cover bg-center">
      <div className="w-1/2 bg-white flex-col justify-center items-center px-28 py-16 rounded-r-[20px]">
        {/* Logo */}
        <div className="flex gap-2 mb-6">
          <img src="/logo.svg" alt="logo" />
          <h1 className="text-3xl w-1 font-semibold text-primary-4">
            Blue Bay
          </h1>
        </div>
        {/* Title */}
        <div className="mb-6">
          <h1 className="text-4xl font-bold mb-2">Login</h1>
          <p className="text-neutral-1">
            Lorem ipsum dolor sit amet consectetur.
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
    </div>
  );
}
