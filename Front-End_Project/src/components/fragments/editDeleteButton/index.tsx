import { useContext } from "react";
import editImg from "../../../assets/svg/edit.svg";
import deleteImg from "../../../assets/svg/delete.svg";
import { ModalContext } from "../../../providers/modalProvider/modalContext";

interface IContactId {
  contactId: string;
}

const EditAndDeleteButton = ({ contactId }: IContactId) => {
  const { handleModalEditContactOpen, handleModalDeleteContactOpen } = useContext(ModalContext);

  const handleEditClick = () => {
    handleModalEditContactOpen();
    sendId();
  };

  const handleDeleteClick = () => {
    handleModalDeleteContactOpen();
    sendId();
  };

  const sendId = () => {
    localStorage.setItem("@CONTACTID", contactId);
  };

  return (
    <div className="flex flex-row gap-2 lg:gap-4">
      <button onClick={handleEditClick}>
        <img className="w-6" src={editImg} alt="edit contact" />
      </button>
      <button onClick={handleDeleteClick}>
        <img className="w-6" src={deleteImg} alt="delete contact" />
      </button>
    </div>
  );
};

export default EditAndDeleteButton;
