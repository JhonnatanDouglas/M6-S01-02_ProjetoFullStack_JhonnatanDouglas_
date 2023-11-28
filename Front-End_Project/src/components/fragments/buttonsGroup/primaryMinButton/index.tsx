import { ForwardedRef, forwardRef } from "react";
import { IButton } from "../../../../interfaces/componentsInterfaces";

const PrimaryMinButton = forwardRef(
  ({ children, extraClassConfig, ...rest }: IButton, ref: ForwardedRef<HTMLButtonElement>) => {
    return (
      <button
        className={`px-4 py-1 md:py-0 transition-all duration-300 ease-linear lg:text-lg text-sm md:text-base font-semibold rounded-md border-[0.0625rem] border-gray-900 text-gray-800 bg-green-500 hover:text-gray-900 hover:bg-green-400 ${extraClassConfig}`}
        ref={ref}
        {...rest}
      >
        {children}
      </button>
    );
  },
);

export default PrimaryMinButton;
