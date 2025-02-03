import {
  ButtonHTMLAttributes,
  DetailedHTMLProps,
  ReactNode,
} from "react";

export interface ButtonIconProps
  extends DetailedHTMLProps<
    ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  icon: ReactNode;
}
