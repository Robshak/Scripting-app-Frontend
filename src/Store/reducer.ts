import { combineReducers } from "@reduxjs/toolkit";
import projectsSliceReducer, {
  PROJECTS_SLICE,
} from "./Slices/projectsSlice";
import settingsSliceReducer, {
  SETTINGS_SLICE,
} from "./Slices/settingsSlice";
import userDataSliceReducer, {
  USER_DATA_SLICE,
} from "./Slices/userData";
import testSliceReducer, { TEST_SLICE } from "./Slices/testSlice";
import tagsSliceReducer, { TAGS_SLICE } from "./Slices/tagsSlice";

const rootReducer = combineReducers({
  [USER_DATA_SLICE]: userDataSliceReducer,
  [PROJECTS_SLICE]: projectsSliceReducer,
  [SETTINGS_SLICE]: settingsSliceReducer,
  [TEST_SLICE]: testSliceReducer,
  [TAGS_SLICE]: tagsSliceReducer,
});

export default rootReducer;
