import styles from "./InputField.module.scss";
import cn from "classnames";
import { InputFieldProps } from "./InputField.props";
import { useDispatch } from "react-redux";
import { updateField } from "@/Store/Slices/settingsSlice";
import { useState } from "react";

export default function InputField({
  sectionId,
  field,
  className,
  ...props
}: InputFieldProps) {
  const dispatch = useDispatch();
  const [currentState, setCurrentState] = useState<string | number>(
    field.value
  );

  const onChangeHandler = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    dispatch(
      updateField({
        sectionId,
        fieldId: field.id,
        value: e.target.value,
      })
    );

    setCurrentState(e.target.value);
  };

  return (
    <input
      className={cn(styles["input"], className)}
      value={currentState}
      onChange={onChangeHandler}
      {...props}
    />
  );
}
