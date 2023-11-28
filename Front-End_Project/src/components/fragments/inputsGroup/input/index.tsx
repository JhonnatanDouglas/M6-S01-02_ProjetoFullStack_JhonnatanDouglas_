import { forwardRef, ForwardedRef } from "react";
import { IInput } from "../../../../interfaces/componentsInterfaces";

const DefaultInput = forwardRef(({ ...rest }: IInput, ref: ForwardedRef<HTMLInputElement>) => {
  return (
    <>
      <input className="p-2 font-normal border-2 rounded-md" ref={ref} {...rest} />
    </>
  );
});

export default DefaultInput;
