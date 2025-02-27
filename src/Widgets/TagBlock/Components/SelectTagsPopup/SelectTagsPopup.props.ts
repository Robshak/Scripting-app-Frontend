import { ITag } from "@/Store/Slices/tagsSlice";
import { DetailedHTMLProps, HTMLAttributes } from "react";

export interface SelectTagsPopupProps
  extends DetailedHTMLProps<
    HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  > {
  title: string;
  allTags: ITag[];
  selectedTags: boolean[];
  setSelectedTags: React.Dispatch<React.SetStateAction<boolean[]>>;
  open: boolean;
  onClose: () => void;
  onApply: () => void;
}
