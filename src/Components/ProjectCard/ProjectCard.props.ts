import { DetailedHTMLProps, HTMLAttributes } from "react";

export interface ProjectCardProps
  extends DetailedHTMLProps<
    HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  > {
  number: number;
}
