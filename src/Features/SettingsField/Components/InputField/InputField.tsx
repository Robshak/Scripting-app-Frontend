import styles from "./InputField.module.scss";
import cn from "classnames";
import { InputFieldProps } from "./InputField.props";
import { useState } from "react";

export default function InputField({
  field,
  className,
  ...props
}: InputFieldProps) {
  const [currentState, setCurrentState] = useState<string>(
    field.initialValue
  );

  const onChangeHandler = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    field.onChange(e.target.value);

    setCurrentState(e.target.value);
  };

  return (
    <input
      className={cn(styles["input"], className)}
      value={currentState as string}
      onChange={onChangeHandler}
      {...props}
    />
  );
}
