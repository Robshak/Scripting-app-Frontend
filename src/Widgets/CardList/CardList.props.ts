import { ProjectCard } from "@/Store/Slices/projectsSlice";
import { DetailedHTMLProps, HTMLAttributes } from "react";

type CardListType = "projects" | "heroes" | "locations";

interface CardListBase {
  type: CardListType;
  isList: boolean;
  addFunction?: () => void;
}

export interface ProjectList extends CardListBase {
  type: "projects";
  projects: ProjectCard[];
}

export type CardList = ProjectList;

export interface CardListProps
  extends DetailedHTMLProps<
    HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  > {
  cardList: CardList;
}
