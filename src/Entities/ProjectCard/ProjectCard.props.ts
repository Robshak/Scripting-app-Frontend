import { IProjectCard } from "@/Shared/Models/Projects";
import { DetailedHTMLProps, HTMLAttributes } from "react";

export interface ProjectCardProps
  extends DetailedHTMLProps<
    HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  > {
  projectCard: IProjectCard;
  isList: boolean;
}
