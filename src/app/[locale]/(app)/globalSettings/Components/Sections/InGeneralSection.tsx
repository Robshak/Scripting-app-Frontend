import styles from "./SettingsSections.module.scss";
import cn from "classnames";
import SettingsField from "@/Features/SettingsField/SettingsField";
import { SettingField } from "@/Features/SettingsField/SettingsField.props";
import { useTheme } from "@/Shared/Context/ThemeContext";

const useInGeneral = (): SettingField[] => {
  const { theme, toggleTheme } = useTheme();

  return [
    {
      title: "Theme",
      description: "You can change color theme",
      type: "select",
      initialValue: theme,
      options: ["light", "dark"],
      onChange: () => {
        toggleTheme();
      },
    },
  ];
};

export default function InGeneralSection() {
  const fields = useInGeneral();

  return (
    <main className={cn(styles["main"])}>
      {fields.map((field) => {
        return <SettingsField key={field.title} field={field} />;
      })}
    </main>
  );
}
