import RegisterForm from "./RegisterForm";
import Logo from "../../common/Logo";
import RegisterTitle from "./RegisterTitle";

export default function RegisterMobile() {
  return (
    <div className="lg:hidden flex flex-col justify-center h-screen px-10 bg-white">
      <Logo />
      <RegisterTitle />
      <RegisterForm />
    </div>
  );
}
