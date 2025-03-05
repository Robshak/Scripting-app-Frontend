import styles from "./AddButton.module.scss";
import cn from "classnames";
import { AddButtonProps } from "./AddButton.props";
import PlusIcon from "./icons/PlusIcon.svg";

export default function AddButton({
  className,
  ...props
}: AddButtonProps) {
  return (
    <button className={cn(styles["button"], className)} {...props}>
      <PlusIcon className={cn(styles["icon"])} />
    </button>
  );
}
