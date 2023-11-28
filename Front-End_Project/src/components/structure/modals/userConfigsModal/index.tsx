import { useContext } from "react";
import { ModalContext } from "../../../../providers/modalProvider/modalContext";
import Modal from "react-modal";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, SubmitHandler } from "react-hook-form";
import { TUserConfigsSchema, userConfigsSchema } from "../../../../schemas/userConfigsFormSchema/registerSchema";
import { IUserUpdate } from "../../../../interfaces/componentsInterfaces";
import { UserContext } from "../../../../providers/usersProvider/userContext";
import PrimaryMaxButton from "../../../fragments/buttonsGroup/primaryMaxButton";
import DefaultInputLabel from "../../../fragments/inputsGroup/inputLabel";

const UserConfigsModal = () => {
  const { userUpdate } = useContext(UserContext);
  const { customModalStyles, modalConfigUser, handleModalUserClose } = useContext(ModalContext);

  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm<TUserConfigsSchema>({ resolver: zodResolver(userConfigsSchema) });

  const submit: SubmitHandler<TUserConfigsSchema> = (dataForm) => {
    reset();

    const newFormData: IUserUpdate = {};

    Object.keys(dataForm).forEach((key) => {
      const value = dataForm[key as keyof TUserConfigsSchema];

      if (value !== undefined && value !== null && value !== "") {
        newFormData[key] = value;
      }
    });

    userUpdate(newFormData);
    handleModalUserClose();
  };

  return (
    <>
      <Modal isOpen={modalConfigUser} onRequestClose={handleModalUserClose} style={customModalStyles}>
        <div className="relative flex flex-col gap-4 px-6 py-8 bg-gray-100 rounded-md sm:w-80 w-60 max-w-xl border-[0.0625rem] border-gray-700">
          <div className="flex flex-row justify-between">
            <h2 className="mb-2 text-lg font-medium md:text-xl lg:text-2xl">Atualizar Usuário</h2>
            <button
              onClick={handleModalUserClose}
              className="absolute top-3 right-3 h-7 w-7 px-[0.625rem] text-sm font-medium text-gray-100 bg-gray-700 transition-all duration-300 ease-linear hover:bg-red-700 rounded-md"
            >
              X
            </button>
          </div>
          <div className="p-2 bg-gray-800 border-[0.0625rem] border-gray-700 text-gray-100 rounded-md">
            <p className="text-xs font-medium text-center md:text-sm">
              Você pode atualizar um único dado se quiser, não é necessário enviar todos os dados.
            </p>
          </div>
          <form onSubmit={handleSubmit(submit)} className="flex flex-col gap-4">
            <DefaultInputLabel
              label="Nome: "
              type="text"
              placeholder="Informe o novo nome"
              errors={errors.name?.message}
              {...register("name")}
            />
            <DefaultInputLabel
              label="Telefone: "
              type="number"
              placeholder="Informe o novo telefone"
              maxLength={11}
              errors={errors.telephone?.message}
              {...register("telephone")}
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

export default UserConfigsModal;
