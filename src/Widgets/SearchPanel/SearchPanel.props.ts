import { ITag } from "@/Store/Slices/tagsSlice";
import { DetailedHTMLProps, HTMLAttributes } from "react";

export type WithTags = {
  tags: string[];
};

/*
  Обязательно чтобы у объектов на вернхнем уровне было поле tags: string[]
*/
export interface SearchPanelProps<T extends WithTags>
  extends DetailedHTMLProps<
    HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  > {
  data: T[];
  keys: string[];
  onSearch: (result: T[]) => void;
  userTags: ITag[];
}
