import InGeneralSection from "./InGeneralSection";
import TagSection from "./TagSection/TagSection";
import TestSection from "./TestSection";
import UserDataSection from "./UserDataSection";

export const settingsMap = {
  Profile: UserDataSection,
  "In general": InGeneralSection,
  Test: TestSection,
  Tags: TagSection,
  // Test3: useUserData,
  // Test4: useUserData,
};
