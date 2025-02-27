import { ProjectCardProps } from "./ProjectCard.props";
import GridProjectCard from "./Components/Grid/GridProjectCard";

export default function ProjectCard({
  projectCard,
  isList,
  className,
}: ProjectCardProps) {
  return isList ? (
    <></>
  ) : (
    <GridProjectCard
      projectCard={projectCard}
      className={className}
    />
  );
}
