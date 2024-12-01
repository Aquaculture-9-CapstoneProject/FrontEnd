import RegisterForm from "./RegisterForm";
import RegisterTitle from "./RegisterTitle";

export default function RegisterMobile() {
  return (
    <div className="lg:hidden flex flex-col justify-center h-screen px-4 sm:px-6 md:px-10 bg-white">
      <img className="mb-8 w-[126px]" src="./logo.svg" alt="Logo" />
      <RegisterTitle />
      <RegisterForm />
    </div>
  );
}
