import styles from "./Tag.module.scss";
import cn from "classnames";
import { TagProps } from "./Tag.props";

export default function Tag({ Tag, className, ...props }: TagProps) {
  return (
    <div
      className={cn(styles["tag"], className)}
      {...props}
      style={{ background: Tag.color }}
    >
      <div className={cn(styles["black-wrapper"])}>
        <div className={cn(styles["name"])}>{Tag.name}</div>
      </div>
    </div>
  );
}
