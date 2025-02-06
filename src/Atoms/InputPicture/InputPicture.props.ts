import { DetailedHTMLProps, InputHTMLAttributes } from "react";

export interface InputPictureProps
  extends DetailedHTMLProps<
    InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {
  className?: string;
}
