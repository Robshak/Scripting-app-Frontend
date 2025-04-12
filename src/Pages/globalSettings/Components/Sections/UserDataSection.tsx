import styles from "./SettingsSections.module.scss";
import cn from "classnames";
import SettingsField from "@/Pages/globalSettings/Features/SettingsField/SettingsField";
import { SettingField } from "@/Pages/globalSettings/Features/SettingsField/SettingsField.props";
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
      type: "input",
      title: "Name",
      description: "Write your username",
      initialValue: userData.name,
      onChange: (value: string) =>
        dispatch(updateField({ field: "name", value })),
    },
    {
      type: "input",
      title: "Real Name",
      description: "Write your real name",
      initialValue: userData.realName,
      onChange: (value: string) =>
        dispatch(updateField({ field: "realName", value })),
    },
    {
      type: "description",
      title: "Description",
      description: "Write your description",
    },
    {
      type: "input",
      title: "Email",
      description: "Write your email",
      initialValue: userData.email,
      onChange: (value: string) =>
        dispatch(updateField({ field: "email", value })),
    },
    {
      type: "input",
      title: "Phone",
      description: "Write your phone",
      initialValue: userData.phone,
      onChange: (value: string) =>
        dispatch(updateField({ field: "phone", value })),
    },
    {
      type: "input",
      title: "Facebook",
      description: "Write link to your facebook",
      initialValue: userData.facebook,
      onChange: (value: string) =>
        dispatch(updateField({ field: "facebook", value })),
    },
    {
      type: "input",
      title: "Instagram",
      description: "Write link to your instagram",
      initialValue: userData.instagram,
      onChange: (value: string) =>
        dispatch(updateField({ field: "instagram", value })),
    },
    {
      type: "input",
      title: "Twitter",
      description: "Write link to your twitter",
      initialValue: userData.twitter,
      onChange: (value: string) =>
        dispatch(updateField({ field: "twitter", value })),
    },
    {
      type: "logout",
      title: "Logout",
      description: "Just log out",
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
