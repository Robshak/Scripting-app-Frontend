import { ITag } from "@/Shared/Models/Tags";
import { DetailedHTMLProps, HTMLAttributes } from "react";

export interface TagFieldProps
  extends DetailedHTMLProps<
    HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  > {
  tag: ITag;
}
