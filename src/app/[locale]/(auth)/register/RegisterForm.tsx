import { updateField } from "@/Store/Slices/userData";
import AuthForm from "@/Widgets/AuthForm/AuthForm";
import { FieldConfig } from "@/Widgets/AuthForm/Models/FormModels";
import { useTranslations } from "next-intl";
import { useRouter } from "next/navigation";
import { useDispatch } from "react-redux";

export default function RegisterForm() {
  const router = useRouter();
  const t = useTranslations("auth");
  const dispatch = useDispatch();

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
      name: "email",
      type: "text",
      placeholder: `${t("email")}...`,
      validation: (value: string) => {
        if (value.trim() === "") {
          return t("errors.email.required");
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

  const handleSubmit = (formData: Record<string, string>) => {
    dispatch(
      updateField({
        field: "name",
        value: formData.username,
      })
    );
    dispatch(
      updateField({
        field: "email",
        value: formData.email,
      })
    );
    dispatch(
      updateField({
        field: "password",
        value: formData.password,
      })
    );

    router.push("/profile");
  };

  return (
    <AuthForm
      header={t("register")}
      bottomTitle={`${t("alreadyHaveAccount")}?`}
      bottomLink={{
        text: t("login"),
        url: "/login",
      }}
      buttonText={t("register")}
      fields={fields}
      onSubmit={handleSubmit}
    />
  );
}
