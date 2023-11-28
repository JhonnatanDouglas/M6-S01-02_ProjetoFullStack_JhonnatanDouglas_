import { ForwardedRef, forwardRef } from "react";
import { IButton } from "../../../../interfaces/componentsInterfaces";

const SecondaryMaxButton = forwardRef(
  ({ children, extraClassConfig, ...rest }: IButton, ref: ForwardedRef<HTMLButtonElement>) => {
    return (
      <button
        className={`px-4 py-1 w-full transition-all duration-300 ease-linear lg:text-lg text-sm md:text-base font-semibold rounded-md border-[0.0625rem] border-gray-900 text-gray-100
        bg-red-500 hover:bg-red-700 hover:text-gray-50 hover:border-gray-700 ${extraClassConfig}`}
        ref={ref}
        {...rest}
      >
        {children}
      </button>
    );
  },
);

export default SecondaryMaxButton;
