import { ProjectCard } from "@/Store/Slices/projectsSlice";
import { DetailedHTMLProps, HTMLAttributes } from "react";

export interface ProjectCardProps
  extends DetailedHTMLProps<
    HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  > {
  projectCard: ProjectCard;
  isList: boolean;
}
