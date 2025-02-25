import { ITag } from "@/Store/Slices/tagsSlice";
import { DetailedHTMLProps, HTMLAttributes } from "react";

export interface TagProps
  extends DetailedHTMLProps<
    HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  > {
  Tag: ITag;
}
