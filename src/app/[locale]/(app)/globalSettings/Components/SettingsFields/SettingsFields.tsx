import { useSelector } from "react-redux";
import { RootState } from "@/Store/store";
import { settingsMap } from "../Sections";

export default function SettingsFields() {
  const activeSection = useSelector(
    (state: RootState) => state.settingsSlice.activeSection
  );

  const CurrentSectionComponent =
    settingsMap[activeSection as keyof typeof settingsMap];

  return <CurrentSectionComponent />;
}
