import { DetailedHTMLProps, HTMLAttributes } from "react";

export interface CreateTagsPopupProps
  extends DetailedHTMLProps<
    HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  > {
  open: boolean;
  onClose: () => void;
  onOverlay?: boolean;
}
