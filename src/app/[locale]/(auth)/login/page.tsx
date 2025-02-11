"use client";

import styles from "./page.module.scss";
import cn from "classnames";
import CustomButton from "@/Shared/CustomButton/CustomButton";
import CustomInput from "@/Shared/CustomInput/CustomInput";
import CustomLink from "@/Shared/CustomLink/CustomLink";
import { useTranslations } from "next-intl";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "@/Store/store";

export default function Login() {
  const router = useRouter();
  const t = useTranslations("auth");
  const userDate = useSelector(
    (state: RootState) => state.userDataSlice
  );

  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });
  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleChange = (name: string, value: string) => {
    setFormData((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  const validate = () => {
    const newErrors: Record<string, string> = {};

    if (
      formData.username !== userDate.name ||
      formData.password !== userDate.password ||
      userDate.name === "" ||
      userDate.password === ""
    ) {
      newErrors.username = t("errors.username.uncorrect");
      newErrors.password = t("errors.password.uncorrect");
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

    router.push("/profile");
  };

  return (
    <form className={cn(styles["main"])} onSubmit={handleSubmit}>
      <h1>{t("login")}</h1>
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
        {t("login")}
      </CustomButton>
      <div className={cn(styles["text"])}>{t("notHaveAccount")}</div>
      <CustomLink href={"/register"} className={styles["link"]}>
        {t("register")}
      </CustomLink>
    </form>
  );
}
