import { useContext } from "react";
import { ModalContext } from "../../../../providers/modalProvider/modalContext";
import Modal from "react-modal";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, SubmitHandler } from "react-hook-form";
import { IContact } from "../../../../interfaces/componentsInterfaces";
import { TNewContactSchema, newContactSchema } from "../../../../schemas/newContactFormSchema/newContactSchema";
import { ContactContext } from "../../../../providers/contactsProvider/contactsProvider";
import PrimaryMaxButton from "../../../fragments/buttonsGroup/primaryMaxButton";
import DefaultInputLabel from "../../../fragments/inputsGroup/inputLabel";

const NewContactModal = () => {
  const { createContact } = useContext(ContactContext);
  const { customModalStyles, modalNewContact, handleModalNewContactClose } = useContext(ModalContext);

  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm<TNewContactSchema>({ resolver: zodResolver(newContactSchema) });

  const submit: SubmitHandler<TNewContactSchema> = (dataForm) => {
    reset();

    const newFormData: IContact = { name: dataForm.name, telephone: dataForm.telephone.toString() };
    createContact(newFormData);
    handleModalNewContactClose();
  };

  return (
    <>
      <Modal isOpen={modalNewContact} onRequestClose={handleModalNewContactClose} style={customModalStyles}>
        <div className="relative flex flex-col gap-4 px-6 py-8 bg-gray-100 rounded-md sm:w-80 w-60 max-w-xl border-[0.0625rem] border-gray-700">
          <div className="flex flex-row justify-between">
            <h2 className="mb-2 text-lg font-medium md:text-xl lg:text-2xl">Novo Contato</h2>
            <button
              onClick={handleModalNewContactClose}
              className="absolute top-3 right-3 h-7 w-7 px-[0.625rem] text-sm font-medium text-gray-100 bg-gray-700 transition-all duration-300 ease-linear hover:bg-red-700 rounded-md"
            >
              X
            </button>
          </div>
          <form onSubmit={handleSubmit(submit)} className="flex flex-col gap-4">
            <DefaultInputLabel
              label="Nome: "
              type="text"
              placeholder="Informe o nome do contato"
              errors={errors.name?.message}
              {...register("name")}
            />
            <DefaultInputLabel
              label="Telefone: "
              type="text"
              placeholder="Informe o telefone do contato"
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

export default NewContactModal;
