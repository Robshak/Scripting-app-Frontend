import { DetailedHTMLProps, HTMLAttributes } from "react";
import { LogoutField } from "../../SettingsField.props";

export interface LogoutFieldProps
  extends DetailedHTMLProps<
    HTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  field: Omit<LogoutField, "type" | "title" | "description">;
}
