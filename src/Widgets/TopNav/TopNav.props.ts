import { DetailedHTMLProps, HTMLAttributes } from "react";

export interface TopNavSection {
  name: string;
  onClick: () => void;
}

export interface TopNavProps
  extends DetailedHTMLProps<
    HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  > {
  sections: TopNavSection[];
  defaultSection: string;
}
