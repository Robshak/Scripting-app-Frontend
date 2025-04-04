import styles from "./CustomInput.module.scss";
import cn from "classnames";
import { CustomInputProps } from "./CustomInput.props";
import { useState } from "react";
import EyeOpen from "./icons/eyeOpen.svg";
import EyeClose from "./icons/eyeClose.svg";

export default function CustomInput({
  errorMessage,
  type,
  className,
  ...props
}: CustomInputProps) {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className={cn(styles["input-wrapper"])}>
      <input
        className={cn(styles["input"], className, {
          [cn(styles["error"])]: errorMessage,
        })}
        type={type === "password" && showPassword ? "text" : type}
        {...props}
      />
      <div className={cn(styles["error-message"])}>
        {errorMessage}
      </div>
      <button
        type="button"
        className={cn(styles["show-password"], {
          [cn(styles["alive"])]: type === "password",
        })}
        onClick={() => setShowPassword(!showPassword)}
      >
        {showPassword ? <EyeOpen /> : <EyeClose />}
      </button>
    </div>
  );
}
