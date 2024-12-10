import RegisterForm from "./RegisterForm";
import RegisterTitle from "./RegisterTitle";

export default function RegisterMobile() {
  return (
    <div className="lg:hidden flex flex-col justify-center px-10 bg-white py-10">
      <img className="mb-8 w-[126px]" src="./logo.svg" />
      <RegisterTitle />
      <RegisterForm />
    </div>
  );
}
