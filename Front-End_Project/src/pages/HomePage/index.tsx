import backgroundImg from "../../assets/imgs/login.jpeg";
import FormHomePage from "../../components/structure/forms/homePage";
import HomePageToRedirect from "../../components/structure/redirectInitialPage/homePage";

const HomePage = () => (
  <main
    className="absolute z-0 flex items-center justify-center w-full h-full bg-center bg-cover"
    style={{ backgroundImage: `url(${backgroundImg})` }}
  >
    <section className="w-96 p-4 py-10 m-2 bg-gray-100 border-gray-700 border-[0.0625rem] rounded-md bg-gradient-to-br from-gray-50 to-gray-200">
      <h2 className="pb-4 text-xl font-medium text-center lg:text-3xl md:text-2xl">LOGIN</h2>
      <FormHomePage />
      <HomePageToRedirect />
    </section>
  </main>
);

export default HomePage;
