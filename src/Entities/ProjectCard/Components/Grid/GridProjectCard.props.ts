import { IProjectCard } from "@/Shared/Models/Projects";
import { DetailedHTMLProps, HTMLAttributes } from "react";

export interface GridProjectCardProps
  extends DetailedHTMLProps<
    HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  > {
  projectCard: IProjectCard;
}
