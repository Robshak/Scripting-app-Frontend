import styles from "./SwitchablePoint.module.scss";
import cn from "classnames";
import { SwitchablePointProps } from "./SwitchablePoint.props";

export default function SwitchablePoint({
  isOn,
  sizeType,
  className,
  ...props
}: SwitchablePointProps) {
  return (
    <div
      className={cn(styles["field"], className, {
        [styles["small-field"]]: sizeType === "small",
        [styles["big-field"]]: sizeType === "big",
      })}
      {...props}
    >
      <div
        className={cn(styles["indicator"], {
          [styles["active"]]: isOn,
          [styles["small-indicator"]]: sizeType === "small",
          [styles["big-indicator"]]: sizeType === "big",
        })}
      />
    </div>
  );
}
