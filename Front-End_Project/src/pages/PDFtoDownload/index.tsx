import { useState, useContext } from "react";
import { dateFormat } from "../../components/fragments/dateFormat";
import { formatTelephone } from "../../components/fragments/telephoneFormat";
import { ContactContext } from "../../providers/contactsProvider/contactsProvider";
import { UserContext } from "../../providers/usersProvider/userContext";
import PrimaryMinButton from "../../components/fragments/buttonsGroup/primaryMinButton";
import { PDFtoContext } from "../../providers/pdfProvider/pdfToContext";

const PDFtoDownloadPage = () => {
  const { targetRef, toPDF } = useContext(PDFtoContext);
  const { userData } = useContext(UserContext);
  const { contactDataList } = useContext(ContactContext);
  const [isZoomedOut, setIsZoomedOut] = useState(false);

  const handleDownloadPDF = () => {
    setIsZoomedOut(true);
    setTimeout(() => {
      toPDF();
      setIsZoomedOut(false);
    }, 1);
  };

  return (
    <>
      <div className="w-full mt-2 text-center">
        <PrimaryMinButton extraClassConfig="h-8 w-[9.375rem]" onClick={handleDownloadPDF}>
          Baixar PDF
        </PrimaryMinButton>
      </div>

      {isZoomedOut ? (
        <div className="flex flex-col p-24 self-center gap-10 w-[155rem] h-[219.1875rem]" ref={targetRef}>
          <div className="flex flex-row items-center justify-between mb-10">
            <h1 className="text-8xl">{userData.name}</h1>
            <div className="flex flex-col gap-4">
              <p className="text-5xl">
                <span className="font-medium">E-mail: </span>
                {userData.email}
              </p>
              <p className="text-5xl">
                <span className="font-medium">Telefone: </span>
                {formatTelephone(userData.telephone)}
              </p>
            </div>
          </div>
          <h1 className="mb-12 text-center text-8xl">Lista de Contatos de {userData.name}</h1>
          <div>
            <div className="flex flex-row justify-between mb-8">
              <h2 className="w-full p-2 text-6xl text-left">Nome</h2>
              <h2 className="w-full p-2 text-6xl text-center">Telefone</h2>
              <h2 className="w-full p-2 text-6xl text-right">Data de Criação</h2>
            </div>
            <ul className="flex flex-col">
              {contactDataList.map((contact) => (
                <li key={contact.id} className="flex flex-row justify-between place-items-center">
                  <p className="w-full p-2 text-5xl text-left">{contact.name}</p>
                  <p className="w-full p-2 text-5xl text-center">{formatTelephone(contact.telephone)}</p>
                  <p className="w-full p-2 text-5xl text-right">{dateFormat(contact.register_date)}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      ) : (
        <div className="flex flex-col self-center w-screen gap-10 py-24 px-96 " ref={targetRef}>
          <div className="border-[0.0625rem] border-gray-700 h-[93.75rem] w-[71.125rem] p-16">
            <div className="flex flex-row items-center justify-between mb-10">
              <h1 className="text-4xl">{userData.name}</h1>
              <div className="flex flex-col gap-1">
                <p className="text-xl">
                  <span className="font-medium">E-mail: </span>
                  {userData.email}
                </p>
                <p className="text-xl">
                  <span className="font-medium">Telefone: </span>
                  {formatTelephone(userData.telephone)}
                </p>
              </div>
            </div>
            <h1 className="mb-12 text-4xl text-center">Lista de Contatos de {userData.name}</h1>
            <div>
              <div className="flex flex-row justify-between mb-8">
                <h2 className="w-full p-2 text-3xl text-left">Nome</h2>
                <h2 className="w-full p-2 text-3xl text-center">Telefone</h2>
                <h2 className="w-full p-2 text-3xl text-right">Data de Criação</h2>
              </div>
              <ul className="flex flex-col">
                {contactDataList.map((contact) => (
                  <li key={contact.id} className="flex flex-row justify-between place-items-center">
                    <p className="w-full p-2 text-xl text-left">{contact.name}</p>
                    <p className="w-full p-2 text-xl text-center">{formatTelephone(contact.telephone)}</p>
                    <p className="w-full p-2 text-xl text-right">{dateFormat(contact.register_date)}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default PDFtoDownloadPage;
