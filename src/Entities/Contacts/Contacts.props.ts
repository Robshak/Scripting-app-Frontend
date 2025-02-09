import { DetailedHTMLProps, HTMLAttributes } from "react";

export interface ContactsProps
  extends DetailedHTMLProps<
    HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  > {
  size: "small" | "big";
  phone: string;
  email: string;
}
