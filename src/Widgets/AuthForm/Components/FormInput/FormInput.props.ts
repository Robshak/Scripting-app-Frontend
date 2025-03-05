import { DetailedHTMLProps, InputHTMLAttributes } from "react";

export interface FormInputProps
  extends DetailedHTMLProps<
    InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {
  name: string;
  type: string;
  placeholder: string;
  value: string;
  error?: string;
}
