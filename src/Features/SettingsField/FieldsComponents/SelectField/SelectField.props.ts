import { DetailedHTMLProps, HTMLAttributes } from "react";
import { SelectField } from "../../SettingsField.props";

export interface SelectFieldProps
  extends DetailedHTMLProps<
    HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  > {
  field: Omit<SelectField, "type" | "title" | "description">;
}
