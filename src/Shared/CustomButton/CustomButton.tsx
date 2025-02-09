import styles from "./CustomButton.module.scss";
import cn from "classnames";
import { CustomButtonProps } from "./CustomButton.props";

export default function CustomButton({
  children,
  className,
  ...props
}: CustomButtonProps) {
  return (
    <button className={cn(styles["button"], className)} {...props}>
      {children}
    </button>
  );
}
