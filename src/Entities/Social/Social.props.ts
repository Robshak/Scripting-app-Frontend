import { DetailedHTMLProps, HTMLAttributes } from "react";

export interface SocialProps
  extends DetailedHTMLProps<
    HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  > {
  facebook?: string;
  instagram?: string;
  twitter?: string;
}
