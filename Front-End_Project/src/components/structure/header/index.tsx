import LogoHeader from "../../fragments/logoHeader";
import { useContext } from "react";
import { UserContext } from "../../../providers/usersProvider/userContext";
import DefaultMinButtonInvert from "../../fragments/buttonsGroup/defaultMinButtonInvert";

const DashboardHeader = () => {
  const { userLoggout } = useContext(UserContext);

  return (
    <header className="flex flex-row justify-center w-full h-16 border-[0.0625rem] bg-gray-800 border-gray-500">
      <div className="flex flex-row justify-between w-11/12 py-4 md:w-11/12 lg:w-10/12 xl:w-8/12">
        <LogoHeader />
        <DefaultMinButtonInvert onClick={userLoggout}>Sair</DefaultMinButtonInvert>
      </div>
    </header>
  );
};

export default DashboardHeader;
