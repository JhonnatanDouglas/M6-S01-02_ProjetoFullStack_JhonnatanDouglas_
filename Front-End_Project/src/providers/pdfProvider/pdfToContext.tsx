import { createContext } from "react";
import { IChildren } from "../../interfaces/componentsInterfaces";
import { Options, usePDF } from "react-to-pdf";

interface IPdf {
  toPDF: (options?: Options | undefined) => void;
  targetRef: React.MutableRefObject<any>;
}

const PDFtoContext = createContext({} as IPdf);

const PDFtoProvider = ({ children }: IChildren) => {
  const { toPDF, targetRef } = usePDF({ filename: "contactsList.pdf" });

  return <PDFtoContext.Provider value={{ toPDF, targetRef }}>{children}</PDFtoContext.Provider>;
};

export { PDFtoContext, PDFtoProvider };
