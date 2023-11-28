import { forwardRef, ForwardedRef } from "react";
import { ITextArea } from "../../../../interfaces/componentsInterfaces";

const DefaultTextArea = forwardRef(({ children, ...rest }: ITextArea, ref: ForwardedRef<HTMLTextAreaElement>) => {
  return (
    <>
      <textarea className="p-2 font-normal border-2 rounded-md" ref={ref} {...rest}>
        {children}
      </textarea>
    </>
  );
});

export default DefaultTextArea;
