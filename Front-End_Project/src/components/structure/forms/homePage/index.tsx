import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { ILogin } from "../../../../interfaces/componentsInterfaces";
import { useContext } from "react";
import { UserContext } from "../../../../providers/usersProvider/userContext";
import { TLoginSchema, loginSchema } from "../../../../schemas/homepageFormSchema/loginSchema";
import PrimaryMaxButton from "../../../fragments/buttonsGroup/primaryMaxButton";
import DefaultInputLabel from "../../../fragments/inputsGroup/inputLabel";

const FormHomePage = () => {
  const { userLogin } = useContext(UserContext);

  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm<TLoginSchema>({ resolver: zodResolver(loginSchema) });

  const submit: SubmitHandler<TLoginSchema> = (dataForm) => {
    reset();

    const newFormData: ILogin = { email: dataForm.email, password: dataForm.password };
    userLogin(newFormData);
  };

  return (
    <form onSubmit={handleSubmit(submit)} className="flex flex-col gap-4">
      <DefaultInputLabel
        label="E-mail:"
        type="email"
        placeholder="Informe seu e-mail"
        errors={errors.email?.message}
        {...register("email")}
      />
      <DefaultInputLabel
        label="Senha:"
        type="password"
        placeholder="Informe sua senha"
        errors={errors.password?.message}
        {...register("password")}
      />
      <PrimaryMaxButton type="submit" extraClassConfig="mt-2">
        Entrar
      </PrimaryMaxButton>
    </form>
  );
};

export default FormHomePage;
