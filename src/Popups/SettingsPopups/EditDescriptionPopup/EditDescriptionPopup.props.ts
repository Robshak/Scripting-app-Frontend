import { DetailedHTMLProps, HTMLAttributes } from "react";

export interface EditDescriptionPopupProps
  extends DetailedHTMLProps<
    HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  > {
  open: boolean;
  onClose: () => void;
  onOverlay?: boolean;
}
