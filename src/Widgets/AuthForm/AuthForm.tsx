import CustomButton from "@/Shared/UI/CustomButton/CustomButton";
import styles from "./AuthForm.module.scss";
import cn from "classnames";
import React, { useState, ChangeEvent, FormEvent } from "react";
import CustomLink from "@/Shared/UI/CustomLink/CustomLink";
import FormInput from "./Components/FormInput/FormInput";
import { AuthFormProps } from "./AuthForm.props";

export default function AuthForm({
  header,
  bottomTitle,
  bottomLink,
  fields,
  buttonText,
  globalValidation,
  onSubmit,
  className,
}: AuthFormProps) {
  const initialFormState = fields.reduce((acc, field) => {
    acc[field.name] = "";
    return acc;
  }, {} as Record<string, string>);

  const [formData, setFormData] =
    useState<Record<string, string>>(initialFormState);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    let valid = true;
    const newErrors: Record<string, string> = {};

    fields.forEach((field) => {
      if (field.validation) {
        const errorMsg = field.validation(formData[field.name]);
        if (errorMsg) {
          valid = false;
          newErrors[field.name] = errorMsg;
        }
      }
    });

    if (globalValidation) {
      const globalErrors = globalValidation(formData);
      Object.entries(globalErrors).forEach(([key, message]) => {
        newErrors[key] = message;
        valid = false;
      });
    }

    setErrors(newErrors);

    if (!valid) return;

    if (onSubmit) {
      onSubmit(formData);
    }
  };

  return (
    <div className={cn(styles["main"], className)}>
      <h1>{header}</h1>
      <form
        onSubmit={handleSubmit}
        className={cn(styles["application"])}
      >
        {fields.map((field, idx) => (
          <FormInput
            className={cn(styles["input"])}
            key={idx}
            name={field.name}
            type={field.type}
            placeholder={field.placeholder}
            value={formData[field.name]}
            onChange={handleInputChange}
            error={errors[field.name]}
          />
        ))}
        <CustomButton type="submit" className={cn(styles["button"])}>
          {buttonText}
        </CustomButton>
      </form>
      <div className={cn(styles["text"])}>{bottomTitle}</div>
      <CustomLink
        href={bottomLink.url}
        className={cn(styles["link"])}
      >
        {bottomLink.text}
      </CustomLink>
    </div>
  );
}
