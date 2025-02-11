import { DetailedHTMLProps, HTMLAttributes } from "react";

type FieldType = "switch" | "input" | "select";

interface BaseField {
  title: string;
  description: string;
  type: FieldType;
}

export interface SwitchField extends BaseField {
  type: "switch";
  initialValue: boolean;
  onChange: (value: boolean) => void;
}

export interface InputField extends BaseField {
  type: "input";
  initialValue: string;
  onChange: (value: string) => void;
}

export interface SelectField extends BaseField {
  type: "select";
  initialValue: string;
  options: string[];
  onChange: (value: string) => void;
}

export type SettingField = SwitchField | InputField | SelectField;

export interface SettingsFieldProps
  extends DetailedHTMLProps<
    HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  > {
  field: SettingField;
}
