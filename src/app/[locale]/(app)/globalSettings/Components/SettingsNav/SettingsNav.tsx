import { selectSection } from "@/Store/Slices/settingsSlice";
import TopNav from "@/Widgets/TopNav/TopNav";
import { TopNavSection } from "@/Widgets/TopNav/TopNav.props";
import { useDispatch } from "react-redux";
import { settingsMap } from "../Sections";

export default function SettingsNav() {
  const dispatch = useDispatch();

  const sectionsArray = Object.keys(settingsMap);

  const sections: TopNavSection[] = sectionsArray.map((section) => ({
    name: section,
    onClick: () => {
      dispatch(selectSection(section));
    },
  }));

  return <TopNav sections={sections} defaultSection={""} />;
}
