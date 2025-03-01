import ProjectCard from "@/Entities/ProjectCard/ProjectCard";
import { InputFieldProps } from "./ProjectList.props";
import AddButton from "@/Shared/UI/AddButton/AddButton";

export default function ProjectList({
  cardList,
  className,
  ...props
}: InputFieldProps) {
  return (
    <div className={className} {...props}>
      {cardList.projects ? (
        <>
          {cardList.projects.map((project) => (
            <ProjectCard
              isList={cardList.isList}
              projectCard={project}
              key={project.id}
              className={className}
            />
          ))}
        </>
      ) : (
        <></>
      )}
      {cardList.addFunction ? (
        <AddButton onClick={cardList.addFunction} />
      ) : (
        <></>
      )}
    </div>
  );
}
