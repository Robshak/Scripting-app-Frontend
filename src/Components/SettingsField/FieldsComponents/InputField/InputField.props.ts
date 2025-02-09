import {
  InputField,
  SettingsState,
} from "@/Store/Slices/settingsSlice";
import { DetailedHTMLProps, HTMLAttributes } from "react";

export interface InputFieldProps
  extends DetailedHTMLProps<
    HTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {
  sectionId: keyof SettingsState["sections"];
  field: InputField;
}
