import { createContext, useState } from "react";
import { IChildren } from "../../interfaces/componentsInterfaces";
import { IModalContext } from "../../interfaces/modalContextInterfaces";

const ModalContext = createContext({} as IModalContext);

const ModalProvider = ({ children }: IChildren) => {
  const [modalConfigUser, isModalConfigUserOpen] = useState<boolean>(false);
  const [modalUpdateUser, isModalUpdateUserOpen] = useState<boolean>(false);
  const [modalDeleteUser, isModalDeleteUserOpen] = useState<boolean>(false);

  const [modalNewContact, isModalNewContactOpen] = useState<boolean>(false);
  const [modalEditContact, isModalEditContactOpen] = useState<boolean>(false);
  const [modalDeleteContact, isModalDeleteContactOpen] = useState<boolean>(false);

  // Modal User Configs
  const handleModalUserOpen = () => {
    isModalConfigUserOpen(true);
  };
  const handleModalUserClose = () => {
    isModalConfigUserOpen(false);
  };

  // Modal Update Configs
  const handleModalUpdateUserOpen = () => {
    isModalUpdateUserOpen(true);
  };
  const handleModalUpdateUserClose = () => {
    isModalUpdateUserOpen(false);
  };

  // Modal Delete Configs
  const handleModalDeleteUserOpen = () => {
    isModalDeleteUserOpen(true);
  };
  const handleModalDeleteUserClose = () => {
    isModalDeleteUserOpen(false);
  };

  // Modal New Contact Configs
  const handleModalNewContactOpen = () => {
    isModalNewContactOpen(true);
  };
  const handleModalNewContactClose = () => {
    isModalNewContactOpen(false);
  };

  // Modal Edit Contact
  const handleModalEditContactOpen = () => {
    isModalEditContactOpen(true);
  };
  const handleModalEditContactClose = () => {
    isModalEditContactOpen(false);
  };

  // Modal Delete Contact
  const handleModalDeleteContactOpen = () => {
    isModalDeleteContactOpen(true);
  };
  const handleModalDeleteContactClose = () => {
    isModalDeleteContactOpen(false);
  };

  // Modal Configs
  const customModalStyles = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      transform: "translate(-50%, -50%)",
      marginRight: "-50%",
      border: "0rem",
      padding: "0rem 0.75rem",
      backgroundColor: "transparent",
    },
    overlay: {
      backgroundColor: "rgba(0, 0, 0, 0.3)",
    },
  };

  return (
    <ModalContext.Provider
      value={{
        customModalStyles,
        modalConfigUser,
        modalNewContact,
        modalEditContact,
        modalDeleteContact,
        modalUpdateUser,
        modalDeleteUser,
        handleModalUserOpen,
        handleModalUserClose,
        handleModalUpdateUserOpen,
        handleModalUpdateUserClose,
        handleModalDeleteUserOpen,
        handleModalDeleteUserClose,
        handleModalNewContactOpen,
        handleModalNewContactClose,
        handleModalEditContactOpen,
        handleModalEditContactClose,
        handleModalDeleteContactOpen,
        handleModalDeleteContactClose,
      }}
    >
      {children}
    </ModalContext.Provider>
  );
};

export { ModalContext, ModalProvider };
