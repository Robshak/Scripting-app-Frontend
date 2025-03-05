import styles from "./SettingsSections.module.scss";
import cn from "classnames";
import SettingsField from "@/Features/SettingsField/SettingsField";
import { SettingField } from "@/Features/SettingsField/SettingsField.props";
import { updateField } from "@/Store/Slices/userData";
import { AppDispatch, RootState } from "@/Store/store";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/navigation";

const useUserData = (): SettingField[] => {
  const userData = useSelector(
    (state: RootState) => state.userDataSlice
  );
  const dispatch = useDispatch<AppDispatch>();
  const router = useRouter();

  return [
    {
      title: "Name",
      description: "Write your username",
      type: "input",
      initialValue: userData.name,
      onChange: (value: string) =>
        dispatch(updateField({ field: "name", value })),
    },
    {
      title: "Real Name",
      description: "Write your real name",
      type: "input",
      initialValue: userData.realName,
      onChange: (value: string) =>
        dispatch(updateField({ field: "realName", value })),
    },
    {
      title: "Description",
      description: "Write your description",
      type: "input",
      initialValue: userData.description,
      onChange: (value: string) =>
        dispatch(updateField({ field: "description", value })),
    },
    {
      title: "Email",
      description: "Write your email",
      type: "input",
      initialValue: userData.email,
      onChange: (value: string) =>
        dispatch(updateField({ field: "email", value })),
    },
    {
      title: "Phone",
      description: "Write your phone",
      type: "input",
      initialValue: userData.phone,
      onChange: (value: string) =>
        dispatch(updateField({ field: "phone", value })),
    },
    {
      title: "Facebook",
      description: "Write link to your facebook",
      type: "input",
      initialValue: userData.facebook,
      onChange: (value: string) =>
        dispatch(updateField({ field: "facebook", value })),
    },
    {
      title: "Instagram",
      description: "Write link to your instagram",
      type: "input",
      initialValue: userData.instagram,
      onChange: (value: string) =>
        dispatch(updateField({ field: "instagram", value })),
    },
    {
      title: "Twitter",
      description: "Write link to your twitter",
      type: "input",
      initialValue: userData.twitter,
      onChange: (value: string) =>
        dispatch(updateField({ field: "twitter", value })),
    },
    {
      title: "Logout",
      description: "Just log out",
      type: "logout",
      onLogout: () => {
        router.push("/login");
      },
    },
  ];
};

export default function UserDataSection() {
  const fields = useUserData();

  return (
    <main className={cn(styles["main"])}>
      {fields.map((field) => {
        return <SettingsField key={field.title} field={field} />;
      })}
    </main>
  );
}
