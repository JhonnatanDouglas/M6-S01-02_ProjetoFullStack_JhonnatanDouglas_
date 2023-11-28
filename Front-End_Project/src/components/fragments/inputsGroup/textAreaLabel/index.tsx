import { IInputsConfigs } from "../../../../interfaces/componentsInterfaces";
import DefaultLabel from "../label";
import DefaultTextArea from "../textArea";

const DefaultTextAreaLabel = ({ label, placeholder, errors }: IInputsConfigs) => {
  return (
    <fieldset className="flex flex-col">
      {label ? <DefaultLabel>{label}</DefaultLabel> : null}
      <DefaultTextArea placeholder={placeholder} />
      {errors ? <p className="mt-2 text-sm font-medium text-red-600">{errors}</p> : null}
    </fieldset>
  );
};

export default DefaultTextAreaLabel;
