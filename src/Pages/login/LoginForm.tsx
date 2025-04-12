import { RootState } from "@/Store/store";
import AuthForm from "@/Widgets/AuthForm/AuthForm";
import { FieldConfig } from "@/Widgets/AuthForm/Models/FormModels";
import { useTranslations } from "next-intl";
import { useRouter } from "next/navigation";
import { useSelector } from "react-redux";

export default function LoginForm() {
  const router = useRouter();
  const t = useTranslations("auth");
  const userDate = useSelector(
    (state: RootState) => state.userDataSlice
  );

  const handleSubmit = () => {
    router.push("/profile");
  };

  const globalValidation = (data: Record<string, string>) => {
    const errors: Record<string, string> = {};
    if (
      data.username.trim() !== userDate.name ||
      data.password.trim() !== userDate.password
    ) {
      errors.username = t("errors.username.uncorrect");
      errors.password = t("errors.password.uncorrect");
    }
    return errors;
  };

  const fields: FieldConfig[] = [
    {
      name: "username",
      type: "text",
      placeholder: `${t("username")}...`,
      validation: (value: string) => {
        if (value.trim() === "") {
          return t("errors.username.required");
        }
        return null;
      },
    },
    {
      name: "password",
      type: "password",
      placeholder: `${t("password")}...`,
      validation: (value: string) => {
        if (value.trim() === "") {
          return t("errors.password.required");
        }
        return null;
      },
    },
  ];

  return (
    <AuthForm
      header={t("login")}
      bottomTitle={`${t("notHaveAccount")}?`}
      bottomLink={{
        text: t("register"),
        url: "/register",
      }}
      buttonText={t("login")}
      fields={fields}
      globalValidation={globalValidation}
      onSubmit={handleSubmit}
    />
  );
}
