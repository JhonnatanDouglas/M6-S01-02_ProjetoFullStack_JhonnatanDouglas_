import { ILink } from "../../../../interfaces/componentsInterfaces";
import { Link } from "react-router-dom";

const PrimaryMaxLink = ({ children, extraClassConfig, toLink }: ILink) => {
  return (
    <Link
      className={`px-4 py-1 w-full text-center transition-all duration-300 ease-linear lg:text-lg text-sm md:text-base font-semibold rounded-md border-[0.0625rem] border-gray-900 text-gray-800 bg-green-500 hover:text-gray-900 hover:bg-green-400 ${extraClassConfig}`}
      to={toLink}
    >
      {children}
    </Link>
  );
};

export default PrimaryMaxLink;
