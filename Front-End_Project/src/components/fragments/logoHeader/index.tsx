import logoImg from "../../../assets/imgs/tab-logo.png";

const LogoHeader = () => {
  return (
    <div className="flex flex-row items-center gap-2 md:gap-3 lg:gap-4">
      <img className="w-4 lg:w-6 md:w-5" src={logoImg} alt="logo image" />
      <p className="text-base text-gray-100 lg:text-xl md:text-lg">Agenda de Contatos</p>
    </div>
  );
};

export default LogoHeader;
