import {
  SelectField,
  SettingsState,
} from "@/Store/Slices/settingsSlice";
import { DetailedHTMLProps, HTMLAttributes } from "react";

export interface SelectFieldProps
  extends DetailedHTMLProps<
    HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  > {
  sectionId: keyof SettingsState["sections"];
  field: SelectField;
}
