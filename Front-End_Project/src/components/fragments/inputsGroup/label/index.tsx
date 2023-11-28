import { ForwardedRef, forwardRef } from "react";
import { ILabel } from "../../../../interfaces/componentsInterfaces";

const DefaultLabel = forwardRef(({ children, ...rest }: ILabel, ref: ForwardedRef<HTMLLabelElement>) => {
  return (
    <>
      <label className="mb-1 text-sm font-medium md:text-base " ref={ref} {...rest}>
        {children}
      </label>
    </>
  );
});

export default DefaultLabel;
