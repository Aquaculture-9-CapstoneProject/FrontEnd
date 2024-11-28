import Logo from "../../common/Logo";
import LoginForm from "./LoginForm";
import LoginTitle from "./LoginTitle";

export default function LoginDesktop() {
  return (
    <div className="hidden lg:flex h-screen w-full bg-[url('/bg-auth.png')] bg-cover bg-center">
      <div className="w-1/2 bg-white flex-col justify-center items-center px-28 py-16 rounded-r-[20px]">
        <Logo />
        <LoginTitle />
        <LoginForm />
      </div>
    </div>
  );
}
