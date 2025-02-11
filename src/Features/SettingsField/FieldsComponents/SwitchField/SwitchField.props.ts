import { DetailedHTMLProps, HTMLAttributes } from "react";
import { SwitchField } from "../../SettingsField.props";

export interface SwitchFieldProps
  extends DetailedHTMLProps<
    HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  > {
  field: Omit<SwitchField, "type" | "title" | "description">;
}
