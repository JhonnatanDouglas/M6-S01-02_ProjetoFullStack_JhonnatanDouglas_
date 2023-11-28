import backgroundImg from "../../assets/imgs/dashboard.jpeg";
import DashboardContacts from "../../components/structure/dashboardContacts";
import DashboardNewContact from "../../components/structure/dashboardNewContact";
import DashboardProfile from "../../components/structure/dashboardProfile";
import DashboardHeader from "../../components/structure/header";
import DeleteContactModal from "../../components/structure/modals/deleteContactModal";
import EditContactModal from "../../components/structure/modals/editContactModal";
import NewContactModal from "../../components/structure/modals/newContactModal";
import UserConfigsModal from "../../components/structure/modals/userConfigsModal";
import UserDeleteModal from "../../components/structure/modals/userDeleteAccountModal";
import UserPasswordUpdateModal from "../../components/structure/modals/userPasswordUpdateModal";

const DashboardPage = () => {
  return (
    <>
      <div className="flex flex-col w-screen h-screen">
        <DashboardHeader />
        <main
          className="flex justify-center flex-1 bg-center bg-cover"
          style={{ backgroundImage: `url(${backgroundImg})` }}
        >
          <div className="flex flex-col w-11/12 gap-4 mt-8 mb-4 md:mb-6 lg:mb-8 lg:mt-12 md:mt-10 lg:w-10/12 xl:w-8/12">
            <DashboardProfile />
            <DashboardNewContact />
            <DashboardContacts />
          </div>
        </main>
      </div>
      <NewContactModal />
      <EditContactModal />
      <DeleteContactModal />
      <UserConfigsModal />
      <UserPasswordUpdateModal />
      <UserDeleteModal />
    </>
  );
};

export default DashboardPage;
