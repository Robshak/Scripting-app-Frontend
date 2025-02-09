import styles from "./ProjectCard.module.scss";
import cn from "classnames";
import { ProjectCardProps } from "./ProjectCard.props";
import { useSelector } from "react-redux";
import { RootState } from "@/Store/store";
import Image from "next/image";
import Tag from "@/Atoms/Tag/Tag";
import { motion } from "framer-motion";

export default function ProjectCard({
  number,
  className,
}: ProjectCardProps) {
  const card = useSelector(
    (state: RootState) => state.projectsSlice.data["Robshak"][number]
  );

  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      className={cn(styles["project-card"], className)}
    >
      {card.picture ? (
        <Image
          src={card.picture}
          alt={card.title}
          className={cn(styles["image"])}
        />
      ) : (
        <div className={cn(styles["image"], styles["empty"])} />
      )}
      <div className={cn(styles["body"])}>
        <div className={styles["tags"]}>
          {card.tags.map((tag, idx) => (
            <Tag Tag={tag} key={idx} />
          ))}
        </div>
        <h1 className={cn(styles["title"])}>{card.title}</h1>
        <div className={cn(styles["description"])}>
          {card.description}
        </div>
      </div>
    </motion.div>
  );
}
