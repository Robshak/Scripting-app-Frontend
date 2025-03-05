import { ITag } from "@/Shared/Models/Tags";
import { DetailedHTMLProps, HTMLAttributes } from "react";

export interface AddBlockProps
  extends DetailedHTMLProps<
    HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  > {
  title: string;
  tags: ITag[];
  onChangeTags: (newTags: ITag[]) => void;
}
