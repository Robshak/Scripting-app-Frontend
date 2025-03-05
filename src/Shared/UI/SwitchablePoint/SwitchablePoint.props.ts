import { DetailedHTMLProps, HTMLAttributes } from "react";

export interface SwitchablePointProps
  extends DetailedHTMLProps<
    HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  > {
  isOn: boolean;
  sizeType: "small" | "big";
}
