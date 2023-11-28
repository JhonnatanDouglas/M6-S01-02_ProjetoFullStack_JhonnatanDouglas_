import { useState } from "react";
import eyeOpenImg from "../../../assets/svg/openEye.svg";
import eyeCloseImg from "../../../assets/svg/closeEye.svg";

interface IInfoUser {
  userName: string;
  userCelphone: string;
  userEmail: string;
}

const DashboardInfoUser = ({ userName, userCelphone, userEmail }: IInfoUser) => {
  const [showEmail, setShowEmail] = useState<string>("blur-sm");
  const [isEyeOpened, setEyeOpened] = useState<boolean>(false);

  const handleShowEmail = (condition: boolean) => {
    if (condition) {
      setEyeOpened(true);
      setShowEmail("blur-0");
    } else {
      setEyeOpened(false);
      setShowEmail("blur-sm");
    }
  };

  return (
    <div className="flex flex-col justify-between gap-1">
      <h1 className="text-lg font-medium md:text-2xl lg:text-3xl">{userName}</h1>
      <div>
        <p className="flex flex-row items-center gap-2 text-xs font-medium md:text-sm lg:text-base">
          Email: <span className={`${showEmail}`}>{userEmail}</span>
          {isEyeOpened ? (
            <button onClick={() => handleShowEmail(false)}>
              <img className="w-4 mt-1" src={eyeOpenImg} alt="" />
            </button>
          ) : (
            <button onClick={() => handleShowEmail(true)}>
              <img className="w-4 mt-1" src={eyeCloseImg} alt="" />
            </button>
          )}
        </p>
      </div>
      <p className="text-sm font-medium md:text-base lg:text-lg">Telefone: {userCelphone}</p>
    </div>
  );
};

export default DashboardInfoUser;
