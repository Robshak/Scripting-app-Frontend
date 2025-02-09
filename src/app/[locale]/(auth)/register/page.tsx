"use client";

import styles from "./page.module.scss";
import cn from "classnames";
import CustomButton from "@/Shared/CustomButton/CustomButton";
import CustomInput from "@/Shared/CustomInput/CustomInput";
import CustomLink from "@/Shared/CustomLink/CustomLink";
import { useTranslations } from "next-intl";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { updateField } from "@/Store/Slices/settingsSlice";

export default function Login() {
  const router = useRouter();
  const t = useTranslations("auth");
  const dispatch = useDispatch();

  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleChange = (name: string, value: string) => {
    setFormData((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  const validate = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.username.trim()) {
      newErrors.username = t("errors.username.required");
      return newErrors;
    }
    if (!formData.email.trim()) {
      newErrors.email = t("errors.email.required");
      return newErrors;
    }
    if (!formData.password.trim()) {
      newErrors.password = t("errors.password.required");
      return newErrors;
    }

    return newErrors;
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    dispatch(
      updateField({
        sectionId: "PersonData",
        fieldId: "name",
        value: formData.username,
      })
    );
    dispatch(
      updateField({
        sectionId: "PersonData",
        fieldId: "email",
        value: formData.email,
      })
    );
    dispatch(
      updateField({
        sectionId: "PersonData",
        fieldId: "password",
        value: formData.password,
      })
    );

    router.push("/profile");
  };

  return (
    <form className={cn(styles["main"])} onSubmit={handleSubmit}>
      <h1>{t("register")}</h1>
      <div className={cn(styles["application"])}>
        <CustomInput
          className={cn(styles["input"])}
          placeholder={`${t("username")}...`}
          errorMessage={errors.username}
          value={formData.username}
          onChange={(event) => {
            handleChange("username", event.target.value);
          }}
        />
        <CustomInput
          className={cn(styles["input"])}
          placeholder={`${t("email")}...`}
          errorMessage={errors.email}
          value={formData.email}
          onChange={(event) => {
            handleChange("email", event.target.value);
          }}
        />
        <CustomInput
          type="password"
          className={cn(styles["input"])}
          placeholder={`${t("password")}...`}
          errorMessage={errors.password}
          value={formData.password}
          onChange={(event) => {
            handleChange("password", event.target.value);
          }}
        />
      </div>
      <CustomButton type="submit" className={cn(styles["button"])}>
        {t("register")}
      </CustomButton>
      <div className={cn(styles["text"])}>
        {t("alreadyHaveAccount")}
      </div>
      <CustomLink href={"/login"} className={styles["link"]}>
        {t("login")}
      </CustomLink>
    </form>
  );
}
