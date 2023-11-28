import backgroundImg from "../../assets/imgs/register.jpeg";
import FormRegisterPage from "../../components/structure/forms/registerPage";
import RegisterPageToRedirect from "../../components/structure/redirectInitialPage/registerPage";

const RegisterPage = () => {
  return (
    <main
      className="absolute z-0 flex items-center justify-center w-full h-full bg-center bg-cover"
      style={{ backgroundImage: `url(${backgroundImg})` }}
    >
      <section className="w-96 m-2 p-4 py-8 bg-gray-100 border-gray-700 border-[0.0625rem] rounded-md bg-gradient-to-br from-gray-50 to-gray-200">
        <h2 className="pb-4 text-xl font-medium text-center md:text-2xl lg:text-3xl">CADASTRE-SE</h2>
        <FormRegisterPage />
        <RegisterPageToRedirect />
      </section>
    </main>
  );
};

export default RegisterPage;
