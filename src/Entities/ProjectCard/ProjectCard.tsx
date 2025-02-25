import { ProjectCardProps } from "./ProjectCard.props";
import ListProjectCard from "./Components/List/ListProjectCard";

export default function ProjectCard({
  projectCard,
  isList,
  className,
}: ProjectCardProps) {
  return isList ? (
    <ListProjectCard
      projectCard={projectCard}
      className={className}
    />
  ) : (
    <></>
  );
}
