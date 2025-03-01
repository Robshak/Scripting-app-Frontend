import styles from "./TagField.module.scss";
import cn from "classnames";
import { TagFieldProps } from "./TagField.props";
import TrashIcon from "./icons/TrashIcon.svg";
import AcceptIcon from "./icons/AcceptIcon.svg";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeTag, updateTag } from "@/Store/Slices/tagsSlice";
import { RootState } from "@/Store/store";
import TagConstructor from "@/Features/TagConstructor/TagConstructor";

export default function TagField({
  tag,
  className,
  ...props
}: TagFieldProps) {
  const [tagName, setTagName] = useState(tag.name);
  const [tagColor, setTagColor] = useState(tag.color);

  const userName = useSelector(
    (state: RootState) => state.userDataSlice.name
  );
  const dispatch = useDispatch();

  const updateTagHandler = () => {
    dispatch(
      updateTag({
        user: userName,
        tag: { id: tag.id, name: tagName, color: tagColor },
        oldTagName: tag.name,
      })
    );
  };

  const removeTagHandler = () => {
    dispatch(removeTag({ user: userName, tag }));
  };

  return (
    <div className={cn(styles["tag-field"], className)} {...props}>
      <TagConstructor
        tagName={tagName}
        tagColor={tagColor}
        onChangeName={setTagName}
        onChangeColor={setTagColor}
        className={styles["tag-constructor"]}
      />

      <div className={cn(styles["icons"])}>
        <div className={cn(styles["icon-wrapper"])}>
          <AcceptIcon
            className={cn(styles["icon"])}
            onClick={updateTagHandler}
          />
        </div>
        <div className={cn(styles["icon-wrapper"])}>
          <TrashIcon
            className={cn(styles["icon"])}
            onClick={removeTagHandler}
          />
        </div>
      </div>
    </div>
  );
}
