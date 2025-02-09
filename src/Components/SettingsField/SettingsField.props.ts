import { SettingField } from "@/Store/Slices/settingsSlice";
import { DetailedHTMLProps, HTMLAttributes } from "react";

export interface SettingsFieldProps
  extends DetailedHTMLProps<
    HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  > {
  field: SettingField;
  sectionId: string;
}
