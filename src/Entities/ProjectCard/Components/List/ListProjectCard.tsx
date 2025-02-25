import styles from "./ListProjectCard.module.scss";
import cn from "classnames";
import Image from "next/image";
import Tag from "@/Shared/UI/Tag/Tag";
import { motion } from "framer-motion";
import { ListProjectCardProps } from "./ListProjectCard.props";
import { useTagsFromNames } from "@/Shared/hooks/useTagsFromNames";

export default function ListProjectCard({
  projectCard,
  className,
}: ListProjectCardProps) {
  const tags = useTagsFromNames(projectCard.tags);

  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      className={cn(styles["project-card"], className)}
    >
      {projectCard.picture ? (
        <Image
          src={projectCard.picture}
          alt={projectCard.title}
          className={cn(styles["image"])}
        />
      ) : (
        <div className={cn(styles["image"], styles["empty"])} />
      )}
      <div className={cn(styles["body"])}>
        <div className={styles["tags"]}>
          {tags.map((tag, idx) => (
            <Tag Tag={tag} key={idx} />
          ))}
        </div>
        <h1 className={cn(styles["title"])}>{projectCard.title}</h1>
        <div className={cn(styles["description"])}>
          {projectCard.description}
        </div>
      </div>
    </motion.div>
  );
}
