import RegisterForm from "./RegisterForm";
import Logo from "../../common/Logo";
import RegisterTitle from "./RegisterTitle";

export default function RegisterDesktop() {
  return (
    <div className="hidden lg:flex h-screen w-full bg-[url('/bg-auth.png')] bg-cover bg-center">
      <div className="w-1/2 bg-white flex-col justify-center items-center px-28 py-16 rounded-r-[20px] overflow-y-auto">
        <Logo />
        <RegisterTitle />
        <RegisterForm />
      </div>
    </div>
  );
}
