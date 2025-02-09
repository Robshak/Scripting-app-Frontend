import styles from "./SwitchField.module.scss";
import cn from "classnames";
import { SwitchFieldProps } from "./SwitchField.props";
import { useDispatch } from "react-redux";
import { updateField } from "@/Store/Slices/settingsSlice";
import { useState } from "react";

export default function SwitchField({
  sectionId,
  field,
  className,
  ...props
}: SwitchFieldProps) {
  const dispatch = useDispatch();
  const [currentState, setCurrentState] = useState<boolean>(
    field.value
  );

  const onClickHandler = () => {
    dispatch(
      updateField({
        sectionId,
        fieldId: field.id,
        value: !currentState,
      })
    );

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
