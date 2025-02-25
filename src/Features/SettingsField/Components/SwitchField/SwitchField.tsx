import styles from "./SwitchField.module.scss";
import cn from "classnames";
import { SwitchFieldProps } from "./SwitchField.props";
import { useState } from "react";

export default function SwitchField({
  field,
  className,
  ...props
}: SwitchFieldProps) {
  const [currentState, setCurrentState] = useState<boolean>(
    field.initialValue
  );

  const onClickHandler = () => {
    field.onChange(!currentState);

    setCurrentState(!currentState);
  };

  return (
    <div
      className={cn(styles["switch-field"], className)}
      {...props}
      onClick={onClickHandler}
    >
      <div
        className={cn(styles["indicator"], {
          [styles["active"]]: currentState,
        })}
      />
    </div>
  );
}
