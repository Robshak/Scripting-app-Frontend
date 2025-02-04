import styles from "./CustomInput.module.scss";
import cn from "classnames";
import { CustomInputProps } from "./CustomInput.props";

export default function CustomInput({
  errorMessage,
  className,
  ...props
}: CustomInputProps) {
  return (
    <input
      className={cn(styles["input"], className, {
        [styles["error"]]: errorMessage,
      })}
      {...props}
    />
  );
}
