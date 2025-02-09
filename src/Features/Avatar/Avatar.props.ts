import { DetailedHTMLProps, InputHTMLAttributes } from "react";

export interface AvatarProps
  extends DetailedHTMLProps<
    InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {
  isInput?: boolean;
}
