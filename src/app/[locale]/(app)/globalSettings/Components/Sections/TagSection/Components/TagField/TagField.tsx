import styles from "./TagField.module.scss";
import cn from "classnames";
import { TagFieldProps } from "./TagField.props";
import Tag from "@/Widgets/TagBlock/Components/Tag/Tag";
import TrashIcon from "./icons/TrashIcon.svg";
import AcceptIcon from "./icons/AcceptIcon.svg";
import { useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeTag, updateTag } from "@/Store/Slices/tagsSlice";
import { RootState } from "@/Store/store";

export default function TagField({
  tag,
  className,
  ...props
}: TagFieldProps) {
  const [tagName, setTagName] = useState(tag.name);
  const [tagColor, setTagColor] = useState(tag.color);
  const inputRef = useRef<HTMLInputElement>(null);

  const userName = useSelector(
    (state: RootState) => state.userDataSlice.name
  );
  const dispatch = useDispatch();

  const clickHandler = () => {
    if (inputRef.current) {
      inputRef.current.click();
    }
  };

  const updateTagHandler = () => {
    dispatch(
      updateTag({
        user: userName,
        tag: { name: tagName, color: tagColor },
        oldTagName: tag.name,
      })
    );
  };

  const removeTagHandler = () => {
    dispatch(removeTag({ user: userName, tag }));
  };

  return (
    <div
      key={tag.name}
      className={cn(styles["tag-field"], className)}
      {...props}
    >
      <input
        type="text"
        maxLength={20}
        className={cn(styles["text-input"])}
        value={tagName}
        onChange={(e) => setTagName(e.target.value)}
      />
      <div
        onClick={clickHandler}
        className={cn(styles["color-picker"])}
      >
        <Tag
          Tag={{ name: tagName, color: tagColor }}
          className={cn(styles["tag"])}
        />
        <input
          ref={inputRef}
          type="color"
          className={cn(styles["color-input"])}
          value={tagColor}
          onChange={(e) => setTagColor(e.target.value)}
        />
      </div>

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
