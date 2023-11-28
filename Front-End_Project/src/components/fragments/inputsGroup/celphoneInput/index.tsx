import { IInputsConfigs } from "../../../../interfaces/componentsInterfaces";
import DefaultLabel from "../label";
import { ForwardedRef, forwardRef } from "react";

const DefaultCelphoneInput = forwardRef(
  ({ label, errors, ...rest }: IInputsConfigs, ref: ForwardedRef<HTMLInputElement>) => {
    return (
      <fieldset className="flex flex-col ">
        {label ? <DefaultLabel>{label}</DefaultLabel> : null}
        <input
          type="text"
          className="w-full p-1 py-2 pl-4 font-normal border-2 rounded-md"
          placeholder="Informe apenas números"
          maxLength={11}
          ref={ref}
          {...rest}
        />
        {errors ? <p className="mt-2 text-xs font-medium text-red-600 md:text-sm">{errors}</p> : null}
      </fieldset>
    );
  },
);

export default DefaultCelphoneInput;
