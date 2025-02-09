import { Section, selectSection } from "@/Store/Slices/settingsSlice";
import { RootState } from "@/Store/store";
import TopNav from "@/Widgets/TopNav/TopNav";
import { TopNavSection } from "@/Widgets/TopNav/TopNav.props";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

export default function SettingsNav() {
  const sectionsRecord = useSelector(
    (state: RootState) => state.settingsSlice.sections
  );
  const dispatch = useDispatch();

  const sectionsArray: Section[] = Object.values(sectionsRecord);

  const sections: TopNavSection[] = sectionsArray.map((section) => ({
    name: section.name,
    onClick: () => {
      dispatch(selectSection(section.id));
    },
  }));

  const defaultSection =
    sectionsRecord[Object.keys(sectionsRecord)[0]];

  useEffect(() => {
    dispatch(selectSection(defaultSection.id));
  }, [defaultSection.id, dispatch]);

  return (
    <TopNav
      sections={sections}
      defaultSection={defaultSection.name}
    />
  );
}
