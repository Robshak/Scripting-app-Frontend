import { useRef, useEffect, useState } from "react";
import styles from "./GridProjectCard.module.scss";
import cn from "classnames";
import Image from "next/image";
import { motion } from "framer-motion";
import { GridProjectCardProps } from "./GridProjectCard.props";
import { useTagsFromNames } from "@/Shared/hooks/useTagsFromNames";
import TagBlock from "@/Widgets/TagBlock/TagBlock";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/Store/store";
import { changeTags } from "@/Store/Slices/projectsSlice";
import { ITag } from "@/Shared/Models/Tags";

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
        tags: newTags.map((t) => t.id),
      })
    );
  };

  const titleRef = useRef<HTMLHeadingElement>(null);
  const [isOverflow, setIsOverflow] = useState(false);

  useEffect(() => {
    if (titleRef.current) {
      const containerWidth = titleRef.current.clientWidth;
      const textElement = titleRef.current.querySelector("span");
      const textWidth = textElement
        ? textElement.scrollWidth
        : containerWidth;
      const diff = textWidth - containerWidth;
      if (diff > 0) {
        setIsOverflow(true);
        titleRef.current.style.setProperty(
          "--overflow-offset",
          `${diff}px`
        );
      } else {
        setIsOverflow(false);
        titleRef.current.style.setProperty(
          "--overflow-offset",
          `0px`
        );
      }
    }
  }, [projectCard.title]);

  return (
    <motion.div
      whileHover={{ x: -4, y: -4 }}
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
        <h1
          ref={titleRef}
          className={cn(styles["title"], {
            [styles.overflow]: isOverflow,
          })}
        >
          <span className={styles["title-text"]}>
            {projectCard.title}
          </span>
        </h1>
        <div className={cn(styles["description"])}>
          {projectCard.description}
        </div>
      </div>
    </motion.div>
  );
}
