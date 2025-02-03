import styles from "./ButtonIcon.module.scss";
import cn from "classnames";
import { ButtonIconProps } from "./ButtonIcon.props";

export default function ButtonIcon({
  icon,
  className,
  ...props
}: ButtonIconProps) {
  return (
    <button className={cn(styles["button"], className)} {...props}>
      <span className={cn(styles["icon"])}>{icon}</span>
    </button>
  );
}
