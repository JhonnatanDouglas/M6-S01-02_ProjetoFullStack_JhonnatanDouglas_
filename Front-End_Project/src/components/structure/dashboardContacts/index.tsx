import ContactsList from "../contactsList";

const DashboardContacts = () => {
  return (
    <section className="flex flex-col gap-4 p-4 bg-gray-100 max-h-[31.25rem] rounded-md border-[0.0625rem] border-gray-700 bg-gradient-to-br from-gray-50 to-gray-200">
      <h2 className="text-lg font-medium lg:text-2xl md:text-xl">Lista de Contatos:</h2>
      <ContactsList />
    </section>
  );
};

export default DashboardContacts;
