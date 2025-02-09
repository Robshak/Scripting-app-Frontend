import styles from "./Projects.module.scss";
import cn from "classnames";
import { ProjectsProps } from "./Projects.props";
import { useSelector } from "react-redux";
import { RootState } from "@/Store/store";
import ProjectCard from "@/Entities/ProjectCard/ProjectCard";

export default function Projects({
  userName,
  className,
  ...props
}: ProjectsProps) {
  const projects = useSelector(
    (state: RootState) => state.projectsSlice.data[userName]
  );

  return (
    <>
      {projects ? (
        <div
          className={cn(styles["projects-list"], className)}
          {...props}
        >
          {projects.map((project, idx) => (
            <ProjectCard
              number={idx}
              key={idx}
              className={cn(styles["project-card"])}
            />
          ))}
        </div>
      ) : (
        <></>
      )}
    </>
  );
}
