interface IContactInfo {
  contactName: string;
  contactCelphone: string;
  createdIn: string;
}

const ContactInfo = ({ contactName, contactCelphone, createdIn }: IContactInfo) => {
  return (
    <div className="flex flex-col gap-1">
      <h2 className="text-base font-medium text-gray-800 lg:text-xl md:text-lg">{contactName}</h2>
      <p className="xsm:text-sm text-[0.75rem] lg:text-base md:text-base text-gray-800">
        <span className="font-medium xsm:text-sm text-[0.75rem] lg:text-base md:text-base text-gray-800">
          Telefone:{" "}
        </span>
        {contactCelphone}
      </p>
      <p className="xsm:text-sm text-[0.75rem] lg:text-base md:text-base text-gray-800">
        <span className="font-medium xsm:text-sm text-[0.75rem] lg:text-base md:text-base text-gray-800">
          Adicionado em:{" "}
        </span>
        {createdIn}
      </p>
    </div>
  );
};

export default ContactInfo;
