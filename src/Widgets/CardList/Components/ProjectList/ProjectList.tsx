import ProjectCard from "@/Entities/ProjectCard/ProjectCard";
import { InputFieldProps } from "./ProjectList.props";

export default function ProjectList({
  cardList,
  className,
  ...props
}: InputFieldProps) {
  return (
    <>
      {cardList.projects ? (
        <div className={className} {...props}>
          {cardList.projects.map((project) => (
            <ProjectCard
              isList={cardList.isList}
              projectCard={project}
              key={project.title}
              className={className}
            />
          ))}
        </div>
      ) : (
        <></>
      )}
    </>
  );
}
