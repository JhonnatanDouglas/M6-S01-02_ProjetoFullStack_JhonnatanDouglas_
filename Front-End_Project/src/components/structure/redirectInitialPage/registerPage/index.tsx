import PrimaryMaxLink from "../../../fragments/buttonsGroup/primaryMaxLink";

const RegisterPageToRedirect = () => {
  return (
    <div className="flex flex-col gap-4">
      <h2 className="mt-6 text-sm font-medium text-center md:text-base">Já possui uma conta?</h2>
      <PrimaryMaxLink toLink="/">Entrar</PrimaryMaxLink>
    </div>
  );
};

export default RegisterPageToRedirect;
