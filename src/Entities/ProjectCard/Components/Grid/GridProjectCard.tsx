import styles from "./GridProjectCard.module.scss";
import cn from "classnames";
import Image from "next/image";
import { motion } from "framer-motion";
import { GridProjectCardProps } from "./GridProjectCard.props";
import { useTagsFromNames } from "@/Shared/hooks/useTagsFromNames";
import TagBlock from "@/Widgets/TagBlock/TagBlock";
import { ITag } from "@/Store/Slices/tagsSlice";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/Store/store";
import { changeTags } from "@/Store/Slices/projectsSlice";

export default function GridProjectCard({
  projectCard,
  className,
}: GridProjectCardProps) {
  const tags = useTagsFromNames(projectCard.tags);
  const userName = useSelector(
    (state: RootState) => state.userDataSlice.name
  );
  const dispatcher = useDispatch();

  const changeTagsHandler = (newTags: ITag[]) => {
    dispatcher(
      changeTags({
        user: userName,
        project: projectCard,
        tags: newTags.map((t) => t.name),
      })
    );
  };

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
        <TagBlock
          title={projectCard.title}
          tags={tags}
          className={styles["tags"]}
          onChangeTags={changeTagsHandler}
        />
        <h1 className={cn(styles["title"])}>{projectCard.title}</h1>
        <div className={cn(styles["description"])}>
          {projectCard.description}
        </div>
      </div>
    </motion.div>
  );
}
