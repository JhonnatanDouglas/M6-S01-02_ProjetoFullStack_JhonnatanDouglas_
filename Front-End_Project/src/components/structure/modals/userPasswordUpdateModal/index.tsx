import { useContext } from "react";
import { ModalContext } from "../../../../providers/modalProvider/modalContext";
import Modal from "react-modal";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, SubmitHandler } from "react-hook-form";
import { IUserConfigs } from "../../../../interfaces/componentsInterfaces";
import {
  TPasswordUpdateSchema,
  passwordUpdateSchema,
} from "../../../../schemas/userPasswordUpdateSchema/passwordUpdateSchema";
import { UserContext } from "../../../../providers/usersProvider/userContext";
import { toast } from "react-toastify";
import PrimaryMaxButton from "../../../fragments/buttonsGroup/primaryMaxButton";
import DefaultInputLabel from "../../../fragments/inputsGroup/inputLabel";

const UserPasswordUpdateModal = () => {
  const { userData, userUpdate } = useContext(UserContext);
  const { customModalStyles, modalUpdateUser, handleModalUpdateUserClose } = useContext(ModalContext);

  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm<TPasswordUpdateSchema>({ resolver: zodResolver(passwordUpdateSchema) });

  const submit: SubmitHandler<TPasswordUpdateSchema> = (dataForm) => {
    reset();

    if (dataForm.email != userData.email) {
      toast.error("E-mail não está igual ao cadastrado.");
      return;
    }

    const newFormData: IUserConfigs = { password: dataForm.password };

    userUpdate(newFormData);
    handleModalUpdateUserClose();
  };

  return (
    <>
      <Modal isOpen={modalUpdateUser} onRequestClose={handleModalUpdateUserClose} style={customModalStyles}>
        <div className="relative flex flex-col gap-4 px-6 py-8 bg-gray-100 rounded-md sm:w-80 w-60 max-w-xl border-[0.0625rem] border-gray-700">
          <div className="flex flex-row justify-between">
            <h2 className="mb-2 text-lg font-medium md:text-xl lg:text-2xl">Alterar Senha</h2>
            <button
              onClick={handleModalUpdateUserClose}
              className="absolute top-3 right-3 h-7 w-7 px-[0.625rem] text-sm font-medium text-gray-100 bg-gray-700 transition-all duration-300 ease-linear hover:bg-red-700 rounded-md"
            >
              X
            </button>
          </div>
          <div className="p-2 bg-red-500 border-[0.0625rem] border-gray-700 text-gray-50 rounded-md">
            <p className="text-xs font-medium text-center md:text-sm">
              Lembre-se de guardar sua senha nova após a alteração. Uma vez alterada, so poderá atualizar novamente com
              a última senha gerada!
            </p>
          </div>
          <form onSubmit={handleSubmit(submit)} className="flex flex-col gap-4">
            <DefaultInputLabel
              label="Confirme o e-mail: "
              type="email"
              placeholder="Confirme o seu e-mail"
              errors={errors.email?.message}
              {...register("email")}
            />
            <DefaultInputLabel
              label="Informe a nova senha: "
              type="password"
              placeholder="Digite nova senha"
              errors={errors.password?.message}
              {...register("password")}
            />
            <DefaultInputLabel
              label="Confirme a nova senha: "
              type="password"
              placeholder="Confirme nova senha"
              errors={errors.confirm?.message}
              {...register("confirm")}
            />
            <PrimaryMaxButton type="submit" extraClassConfig="mt-2">
              Enviar
            </PrimaryMaxButton>
          </form>
        </div>
      </Modal>
    </>
  );
};

export default UserPasswordUpdateModal;
