import { useContext } from "react";
import { ModalContext } from "../../../providers/modalProvider/modalContext";
import { Link } from "react-router-dom";
import DefaultMinButtonInvert from "../../fragments/buttonsGroup/defaultMinButtonInvert";

const DashboardNewContact = () => {
  const { handleModalNewContactOpen } = useContext(ModalContext);
  return (
    <>
      <section className="flex flex-row justify-end gap-1 rounded-md">
        <DefaultMinButtonInvert extraClassConfig="h-8">
          <Link to="/pdf/download" target="_blank">
            Visualizar PDF
          </Link>
        </DefaultMinButtonInvert>
        <DefaultMinButtonInvert extraClassConfig="h-8" onClick={handleModalNewContactOpen}>
          Novo Contato
        </DefaultMinButtonInvert>
      </section>
    </>
  );
};

export default DashboardNewContact;
