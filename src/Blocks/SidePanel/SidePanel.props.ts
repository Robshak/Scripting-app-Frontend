import { DetailedHTMLProps, HTMLAttributes } from "react";
import { sidepanelStates } from "./State";

export interface SidePanelProps
  extends DetailedHTMLProps<
    HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  > {
  currentState: sidepanelStates;
  currentButton: number;
}
