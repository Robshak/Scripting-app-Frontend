import { DetailedHTMLProps, HTMLAttributes } from "react";
import { ISideButton } from "../State";

export interface SideButtonProps
  extends DetailedHTMLProps<
    HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  > {
  button: ISideButton;
  active?: boolean;
  first?: boolean;
}
