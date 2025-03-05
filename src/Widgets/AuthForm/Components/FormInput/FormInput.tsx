import CustomInput from "@/Shared/UI/CustomInput/CustomInput";
import { FormInputProps } from "./FormInput.props";

export default function FormInput({
  name,
  type,
  placeholder,
  value,
  error,
  className,
  ...props
}: FormInputProps) {
  return (
    <CustomInput
      className={className}
      name={name}
      type={type}
      placeholder={placeholder}
      value={value}
      errorMessage={error}
      {...props}
    />
  );
}
