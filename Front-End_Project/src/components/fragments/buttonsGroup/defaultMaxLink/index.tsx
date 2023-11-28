import { Link } from "react-router-dom";
import { ILink } from "../../../../interfaces/componentsInterfaces";

const DefaultMaxLink = ({ children, extraClassConfig, toLink }: ILink) => {
  return (
    <Link
      className={`px-4 py-1 w-full text-center transition-all duration-300 ease-linear lg:text-lg text-sm md:text-base font-semibold rounded-md border-[0.0625rem] border-gray-900 text-gray-100 bg-gray-800 hover:text-gray-800 hover:bg-gray-100 ${extraClassConfig}`}
      to={toLink}
    >
      {children}
    </Link>
  );
};

export default DefaultMaxLink;
