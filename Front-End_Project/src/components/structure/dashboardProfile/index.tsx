import { useContext } from "react";
import DashboardInfoUser from "../dashboardInfoUser";
import { ModalContext } from "../../../providers/modalProvider/modalContext";
import { UserContext } from "../../../providers/usersProvider/userContext";
import { formatTelephone } from "../../fragments/telephoneFormat";
import DefaultMinButton from "../../fragments/buttonsGroup/defaultMinButton";

const DashboardProfile = () => {
  const { userData } = useContext(UserContext);
  const { handleModalUserOpen, handleModalUpdateUserOpen, handleModalDeleteUserOpen } = useContext(ModalContext);

  return (
    <section className="flex flex-col md:py-8 px-4 py-6 gap-4 bg-gray-100 border-[0.0625rem] border-gray-700 rounded-md bg-gradient-to-br from-gray-50 to-gray-200">
      <div className="flex flex-wrap items-center gap-2 md:justify-between">
        <DashboardInfoUser
          userName={userData.name}
          userCelphone={formatTelephone(userData.telephone)}
          userEmail={userData.email}
        />
        <div className="flex flex-col flex-grow gap-1 sm:flex-grow-0">
          <DefaultMinButton onClick={handleModalUserOpen} extraClassConfig="h-8">
            Atualizar Dados
          </DefaultMinButton>
          <DefaultMinButton onClick={handleModalUpdateUserOpen} extraClassConfig="h-8">
            Alterar Senha
          </DefaultMinButton>
          <DefaultMinButton onClick={handleModalDeleteUserOpen} extraClassConfig="h-8">
            Deletar Conta
          </DefaultMinButton>
        </div>
      </div>
      <div>
        <p className="text-sm text-justify md:text-left md:text-base font-default">
          Esta é a sua lista de contatos. Para adicionar um novo contato, basta clicar em "novo contato". Você também
          poderá editar ou excluir um contato existente na lista abaixo.
        </p>
      </div>
    </section>
  );
};

export default DashboardProfile;
