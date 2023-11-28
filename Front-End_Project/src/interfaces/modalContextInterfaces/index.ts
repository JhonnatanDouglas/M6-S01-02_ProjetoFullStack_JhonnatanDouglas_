interface IModalConfigs {
  content: {
    top: string;
    left: string;
    right: string;
    bottom: string;
    transform: string;
    marginRight: string;
    border: string;
    padding: string;
    backgroundColor: string;
  };
  overlay: {
    backgroundColor: string;
  };
}

interface IModalContext {
  customModalStyles: IModalConfigs;
  modalConfigUser: boolean;
  modalUpdateUser: boolean;
  modalDeleteUser: boolean;
  modalNewContact: boolean;
  modalEditContact: boolean;
  modalDeleteContact: boolean;
  handleModalUserOpen: () => void;
  handleModalUserClose: () => void;
  handleModalUpdateUserOpen: () => void;
  handleModalUpdateUserClose: () => void;
  handleModalDeleteUserOpen: () => void;
  handleModalDeleteUserClose: () => void;
  handleModalNewContactOpen: () => void;
  handleModalNewContactClose: () => void;
  handleModalEditContactOpen: () => void;
  handleModalEditContactClose: () => void;
  handleModalDeleteContactOpen: () => void;
  handleModalDeleteContactClose: () => void;
}

export type { IModalConfigs, IModalContext };
