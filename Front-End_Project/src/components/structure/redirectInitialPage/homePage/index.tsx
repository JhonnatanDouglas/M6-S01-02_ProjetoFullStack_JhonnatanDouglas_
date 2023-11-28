import DefaultMaxLink from "../../../fragments/buttonsGroup/defaultMaxLink";

const HomePageToRedirect = () => {
  return (
    <div className="flex flex-col gap-4">
      <h2 className="mt-6 text-sm font-medium text-center md:text-base">Ainda não possui uma conta?</h2>
      <DefaultMaxLink toLink="/register">Cadastre-se já</DefaultMaxLink>
    </div>
  );
};

export default HomePageToRedirect;
