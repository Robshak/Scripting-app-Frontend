import { ProjectCard } from "@/Store/Slices/projectsSlice";
import { DetailedHTMLProps, HTMLAttributes } from "react";

export interface GridProjectCardProps
  extends DetailedHTMLProps<
    HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  > {
  projectCard: ProjectCard;
}
