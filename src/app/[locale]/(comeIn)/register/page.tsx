"use client";

import styles from "./page.module.scss";
import cn from "classnames";
import CustomButton from "@/Atoms/CustomButton/CustomButton";
import CustomInput from "@/Atoms/CustomInput/CustomInput";
import CustomLink from "@/Atoms/CustomLink/CustomLink";
import { useTranslations } from "next-intl";
import { useRouter } from "next/navigation";

export default function Login() {
  const router = useRouter();
  const t = useTranslations("auth");

  return (
    <div className={cn(styles["main"])}>
      <h1>{t("register")}</h1>
      <div className={cn(styles["application"])}>
        <CustomInput
          className={cn(styles["input"])}
          placeholder={`${t("username")}...`}
        />
        <CustomInput
          className={cn(styles["input"])}
          placeholder={`${t("email")}...`}
        />
        <CustomInput
          className={cn(styles["input"])}
          placeholder={`${t("password")}...`}
        />
      </div>
      <CustomButton
        className={cn(styles["button"])}
        onClick={() => {
          router.push("/profile");
        }}
      >
        {t("login")}
      </CustomButton>
      <div className={cn(styles["text"])}>
        {t("alreadyHaveAccount")}
      </div>
      <CustomLink href={"/login"} className={styles["link"]}>
        {t("login")}
      </CustomLink>
    </div>
  );
}
