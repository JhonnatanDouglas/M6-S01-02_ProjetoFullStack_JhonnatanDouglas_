import { TRegisterSchema, registerSchema } from "../../../../schemas/registerPageFormSchema/registerSchema";
import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { IRegister } from "../../../../interfaces/componentsInterfaces";
import { useContext } from "react";
import { UserContext } from "../../../../providers/usersProvider/userContext";
import DefaultMaxButton from "../../../fragments/buttonsGroup/defaultMaxButton";
import DefaultCelphoneInput from "../../../fragments/inputsGroup/celphoneInput";
import DefaultInputLabel from "../../../fragments/inputsGroup/inputLabel";

const FormRegisterPage = () => {
  const { userRegister } = useContext(UserContext);

  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm<TRegisterSchema>({ resolver: zodResolver(registerSchema) });

  const submit: SubmitHandler<TRegisterSchema> = (dataForm) => {
    reset();

    const newDataForm: IRegister = {
      name: dataForm.name,
      email: dataForm.email,
      password: dataForm.password,
      telephone: dataForm.telephone.toString(),
    };

    userRegister(newDataForm);
  };

  return (
    <form onSubmit={handleSubmit(submit)} className="flex flex-col gap-4 ">
      <DefaultInputLabel
        label="Nome:"
        type="text"
        placeholder="Informe seu nome"
        errors={errors.name?.message}
        {...register("name")}
      />
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
      <DefaultInputLabel
        label="Confirme sua senha:"
        type="password"
        placeholder="Confirme sua senha"
        errors={errors.confirm?.message}
        {...register("confirm")}
      />
      <DefaultCelphoneInput
        label="Informe seu telefone:"
        type="number"
        errors={errors.telephone?.message}
        {...register("telephone")}
      />
      <DefaultMaxButton type="submit" extraClassConfig="mt-2">
        Cadastrar
      </DefaultMaxButton>
    </form>
  );
};

export default FormRegisterPage;
