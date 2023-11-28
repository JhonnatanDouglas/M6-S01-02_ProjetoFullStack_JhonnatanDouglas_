import { ForwardedRef, forwardRef } from "react";
import { IInputsConfigs } from "../../../../interfaces/componentsInterfaces";
import DefaultLabel from "../label";

const DefaultInputLabel = forwardRef(
  ({ label, placeholder, errors, ...rest }: IInputsConfigs, ref: ForwardedRef<HTMLInputElement>) => {
    return (
      <fieldset className="flex flex-col">
        {label ? <DefaultLabel>{label}</DefaultLabel> : null}
        <input
          className="p-2 text-sm font-normal border-2 rounded-md md:text-base"
          placeholder={placeholder}
          ref={ref}
          {...rest}
        />
        {errors ? <p className="mt-2 text-xs font-medium text-red-600 md:text-sm">{errors}</p> : null}
      </fieldset>
    );
  },
);

export default DefaultInputLabel;
