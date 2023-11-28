import { useContext } from "react";
import { ModalContext } from "../../../../providers/modalProvider/modalContext";
import Modal from "react-modal";
import { ContactContext } from "../../../../providers/contactsProvider/contactsProvider";
import PrimaryMaxButton from "../../../fragments/buttonsGroup/primaryMaxButton";
import SecondaryMaxButton from "../../../fragments/buttonsGroup/secondaryMaxButton";

const DeleteContactModal = () => {
  const { deleteContact } = useContext(ContactContext);
  const { customModalStyles, modalDeleteContact, handleModalDeleteContactClose } = useContext(ModalContext);

  const handleConfirmDelete = () => {
    deleteContact();
    handleModalDeleteContactClose();
  };

  return (
    <>
      <Modal isOpen={modalDeleteContact} onRequestClose={handleModalDeleteContactClose} style={customModalStyles}>
        <div className="relative flex flex-col gap-4 px-6 py-8 bg-gray-100 rounded-md sm:w-80 w-60 max-w-xl border-[0.0625rem] border-gray-700">
          <div className="flex flex-row justify-between">
            <h2 className="mb-2 text-lg font-medium md:text-xl lg:text-2xl">Deletar Contato</h2>
            <button
              onClick={handleModalDeleteContactClose}
              className="absolute top-3 right-3 h-7 w-7 px-[0.625rem] text-sm font-medium text-gray-100 bg-gray-700 transition-all duration-300 ease-linear hover:bg-red-700 rounded-md"
            >
              X
            </button>
          </div>
          <div className="flex flex-col gap-2 border-[0.0625rem] border-gray-800 bg-red-500 rounded-md p-2">
            <p className="text-xs font-bold text-center text-gray-100 md:text-sm lg:text-base">
              VOCE TEM CERTEZA QUE DESEJA EXCLUIR ESTE CONTATO?
            </p>
            <p className="text-xs font-bold text-center text-gray-100 md:text-sm lg:text-base">
              Este processo não poderá ser revertido, você precisará adicionar o contato novamente se necessário.
            </p>
          </div>
          <div className="flex flex-row gap-2 mt-4">
            <SecondaryMaxButton onClick={handleConfirmDelete}>Sim</SecondaryMaxButton>
            <PrimaryMaxButton onClick={handleModalDeleteContactClose}>Não</PrimaryMaxButton>
          </div>
        </div>
      </Modal>
    </>
  );
};

export default DeleteContactModal;
