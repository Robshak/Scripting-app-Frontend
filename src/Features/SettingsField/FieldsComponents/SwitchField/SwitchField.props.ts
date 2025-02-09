import {
  SettingsState,
  SwitchField,
} from "@/Store/Slices/settingsSlice";
import { DetailedHTMLProps, HTMLAttributes } from "react";

export interface SwitchFieldProps
  extends DetailedHTMLProps<
    HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  > {
  sectionId: keyof SettingsState["sections"];
  field: SwitchField;
}
