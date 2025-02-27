import { ITag } from "@/Store/Slices/tagsSlice";
import { DetailedHTMLProps, HTMLAttributes } from "react";

export interface TagBlockProps
  extends DetailedHTMLProps<
    HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  > {
  title: string;
  tags: ITag[];
  onChangeTags?: (newTags: ITag[]) => void;
}
