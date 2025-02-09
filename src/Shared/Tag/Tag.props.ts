import { Tag } from "@/Store/Slices/types";
import { DetailedHTMLProps, HTMLAttributes } from "react";

export interface TagProps
  extends DetailedHTMLProps<
    HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  > {
  Tag: Tag;
}
