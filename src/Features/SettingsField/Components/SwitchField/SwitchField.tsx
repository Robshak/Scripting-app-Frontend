import { SwitchFieldProps } from "./SwitchField.props";
import { useState } from "react";
import SwitchablePoint from "@/Shared/UI/SwitchablePoint/SwitchablePoint";

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
    <SwitchablePoint
      className={className}
      isOn={currentState}
      sizeType={"big"}
      onClick={onClickHandler}
      {...props}
    />
  );
}
