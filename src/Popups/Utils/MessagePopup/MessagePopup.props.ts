import { JSX } from "react";

export interface MessagePopupProps {
  text: string;
  position?: "top" | "bottom" | "left" | "right";
  trigger?: JSX.Element;
  className?: string;
  animated?: boolean;
  temporary?: boolean;
}
