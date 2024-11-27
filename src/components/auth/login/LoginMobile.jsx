import Logo from "../../common/Logo";
import LoginForm from "./LoginForm";
import LoginTitle from "./LoginTitle";

export default function LoginMobile() {
  return (
    <div className="lg:hidden flex flex-col justify-center h-screen px-10 bg-white">
      <Logo />
      <LoginTitle />
      <LoginForm />
    </div>
  );
}
