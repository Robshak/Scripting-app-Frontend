import { selectSection } from "@/Store/Slices/settingsSlice";
import TopNav from "@/Widgets/TopNav/TopNav";
import { TopNavSection } from "@/Widgets/TopNav/TopNav.props";
import { useDispatch, useSelector } from "react-redux";
import { settingsMap } from "../Sections";
import { RootState } from "@/Store/store";

export default function SettingsNav() {
  const dispatch = useDispatch();
  const currentSection = useSelector(
    (state: RootState) => state.settingsSlice.activeSection
  );

  const sectionsArray = Object.keys(settingsMap);

  const sections: TopNavSection[] = sectionsArray.map((section) => ({
    name: section,
    onClick: () => {
      dispatch(selectSection(section));
    },
  }));

  return (
    <TopNav sections={sections} defaultSection={currentSection} />
  );
}
