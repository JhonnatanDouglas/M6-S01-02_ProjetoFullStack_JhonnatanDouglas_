import { useContext } from "react";
import { ContactContext } from "../../../providers/contactsProvider/contactsProvider";
import ContactInfo from "../../fragments/contact";
import EditAndDeleteButton from "../../fragments/editDeleteButton";
import { dateFormat } from "../../fragments/dateFormat";
import { formatTelephone } from "../../fragments/telephoneFormat";

const ContactsList = () => {
  const { contactDataList } = useContext(ContactContext);

  return (
    <ul className="flex flex-col gap-2 overflow-y-auto h-96">
      {contactDataList.length > 0 ? (
        contactDataList.map((contact) => (
          <li
            key={contact.id}
            className="flex flex-row p-3 justify-between border-[0.0625rem] mr-2 border-gray-600 bg-gradient-to-r from-gray-100 to-gray-400 rounded-md"
          >
            <ContactInfo
              contactName={contact.name}
              contactCelphone={formatTelephone(contact.telephone)}
              createdIn={dateFormat(contact.register_date)}
            />
            <EditAndDeleteButton contactId={contact.id} />
          </li>
        ))
      ) : (
        <div className="flex flex-row p-3 justify-center h-96 items-center border-[0.0625rem] border-gray-400 rounded-md">
          <p className="text-2xl font-semibold text-gray-500">Lista de contatos vazia.</p>
        </div>
      )}
    </ul>
  );
};

export default ContactsList;
