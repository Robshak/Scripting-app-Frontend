import styles from "./TagConstructor.module.scss";
import cn from "classnames";
import { TagConstructorProps } from "./TagConstructor.props";
import { useRef } from "react";
import Tag from "@/Shared/UI/Tag/Tag";

export default function TagConstructor({
  tagName,
  tagColor,
  onChangeName,
  onChangeColor,
  className,
  ...props
}: TagConstructorProps) {
  const inputRef = useRef<HTMLInputElement>(null);

  const clickHandler = () => {
    if (inputRef.current) {
      inputRef.current.click();
    }
  };

  const updateNameHandler = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    onChangeName(e.target.value);
  };

  const updateColorHandler = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    onChangeColor(e.target.value);
  };

  return (
    <div
      className={cn(styles["tag-constructor"], className)}
      {...props}
    >
      <input
        type="text"
        maxLength={20}
        className={cn(styles["text-input"])}
        value={tagName}
        onChange={updateNameHandler}
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
          onChange={updateColorHandler}
        />
      </div>
    </div>
  );
}
