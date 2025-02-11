import { DetailedHTMLProps, HTMLAttributes } from "react";

export interface UserSummaryProps
  extends DetailedHTMLProps<
    HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  > {
  size: "small" | "big";
  avatarIsInput?: boolean;
}
