import { createContext, useContext, useEffect, useState } from "react";
import { IChildren, IContact, IContactList, IContactUpdate } from "../../interfaces/componentsInterfaces";
import { api } from "../../services/api";
import { toast } from "react-toastify";
import { UserContext } from "../usersProvider/userContext";

interface IContactContext {
  isLoadingContactData: boolean;
  contactDataList: IContactList[];
  createContact: (newContactData: IContact) => Promise<void>;
  loadAllContacts: () => Promise<void>;
  updateContact: (updateContactData: IContactUpdate) => Promise<void>;
  deleteContact: () => Promise<void>;
}

const ContactContext = createContext({} as IContactContext);

const ContactProvider = ({ children }: IChildren) => {
  const { loadContacts } = useContext(UserContext);
  const [isLoadingContactData, setIsLoadingContactData] = useState<boolean>(false);
  const [contactDataList, setContactDataList] = useState<IContactList[]>([]);

  useEffect(() => {
    const token: string | null = localStorage.getItem("@TOKEN");

    if (token) {
      loadAllContacts();
    }
  }, [isLoadingContactData || loadContacts]);

  const createContact = async (newContactData: IContact) => {
    try {
      setIsLoadingContactData(true);
      const token: string | null = localStorage.getItem("@TOKEN");

      if (!token) {
        toast.error("Token inválido.");
        return;
      }

      const { status } = await api.post("/contacts", newContactData, { headers: { Authorization: `Bearer ${token}` } });

      if (status !== 201) {
        toast.error("Não foi possível criar o contato.");
        return;
      }

      loadAllContacts();
      toast.success("Contato criado com sucesso.");
    } catch (error) {
      console.error(error);
      toast.error("Não foi possível fazer a criação o contato.");
    } finally {
      setIsLoadingContactData(false);
    }
  };

  const loadAllContacts = async () => {
    try {
      const token: string | null = localStorage.getItem("@TOKEN");

      if (!token) {
        toast.error("Token inválido.");
        return;
      }

      const { data, status } = await api.get("contacts", { headers: { Authorization: `Bearer ${token}` } });

      if (status !== 200) {
        toast.error("Não foi possível carregar a lista com todos os contatos.");
        return;
      }

      setContactDataList(data);
    } catch (error) {
      console.error(error);
      toast.error("Não foi possível listar todos os contatos.");
    }
  };

  const updateContact = async (updateContactData: IContactUpdate) => {
    const token: string | null = localStorage.getItem("@TOKEN");
    const contactId: string | null = localStorage.getItem("@CONTACTID");

    if (Object.keys(updateContactData).length !== 0) {
      try {
        setIsLoadingContactData(true);
        if (!token) {
          toast.error("Token inválido.");
          return;
        }
        if (!contactId) {
          toast.error("ContactID inválido.");
          return;
        }

        const { status } = await api.patch(`/contacts/${contactId}`, updateContactData, {
          headers: { Authorization: `Bearer ${token}` },
        });

        if (status !== 200) {
          toast.error("Não foi possível atualizar o contato.");
          return;
        }

        loadAllContacts();
        toast.success("Contato atualizado com sucesso.");
      } catch (error) {
        console.error(error);
        toast.error("Não foi possível fazer a atualização o contato.");
      } finally {
        setIsLoadingContactData(false);
      }
    }
  };

  const deleteContact = async () => {
    const token: string | null = localStorage.getItem("@TOKEN");
    const contactId: string | null = localStorage.getItem("@CONTACTID");

    try {
      setIsLoadingContactData(true);
      if (!token) {
        toast.error("Token inválido.");
        return;
      }
      if (!contactId) {
        toast.error("ContactID inválido.");
        return;
      }

      const { status } = await api.delete(`/contacts/${contactId}`, {
        headers: { Authorization: `Bearer ${token}` },
      });

      if (status !== 204) {
        toast.error("Não foi possível deletar o contato.");
        return;
      }

      loadAllContacts();
      toast.success("Contato deletado com sucesso.");
    } catch (error) {
      console.error(error);
      toast.error("Não foi possível carregar as informações do contato.");
    } finally {
      setIsLoadingContactData(false);
    }
  };

  return (
    <ContactContext.Provider
      value={{ isLoadingContactData, contactDataList, createContact, loadAllContacts, updateContact, deleteContact }}
    >
      {children}
    </ContactContext.Provider>
  );
};

export { ContactContext, ContactProvider };
