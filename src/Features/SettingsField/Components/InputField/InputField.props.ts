import { DetailedHTMLProps, HTMLAttributes } from "react";
import { InputField } from "../../SettingsField.props";

export interface InputFieldProps
  extends DetailedHTMLProps<
    HTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {
  field: Omit<InputField, "type" | "title" | "description">;
}
