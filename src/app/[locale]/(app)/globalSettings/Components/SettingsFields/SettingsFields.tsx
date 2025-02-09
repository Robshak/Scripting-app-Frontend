import styles from "./SettingsFields.module.scss";
import cn from "classnames";
import SettingsField from "@/Features/SettingsField/SettingsField";
import { useSelector } from "react-redux";
import { RootState } from "@/Store/store";

export default function SettingsFields() {
  const sections = useSelector(
    (state: RootState) => state.settingsSlice.sections
  );
  const currentSection = useSelector(
    (state: RootState) => state.settingsSlice.currentSectionId
  );

  return (
    <main className={cn(styles["main"])}>
      {Object.keys(sections[currentSection].fields).map((fieldId) => {
        const field = sections[currentSection].fields[fieldId];
        return (
          <SettingsField
            key={field.id}
            field={field}
            sectionId={currentSection}
          />
        );
      })}
    </main>
  );
}
