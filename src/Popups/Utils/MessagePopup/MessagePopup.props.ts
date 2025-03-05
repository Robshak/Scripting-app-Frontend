import { JSX } from "react";

export type PopupPosition =
  | "top"
  | "bottom"
  | "left"
  | "right"
  | "center";

export interface MessagePopupProps {
  text: string;
  position?: PopupPosition;
  trigger?: JSX.Element;
  className?: string;
  animated?: boolean;
  temporary?: boolean;
}
