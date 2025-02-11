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

const rootReducer = combineReducers({
  [USER_DATA_SLICE]: userDataSliceReducer,
  [PROJECTS_SLICE]: projectsSliceReducer,
  [SETTINGS_SLICE]: settingsSliceReducer,
  [TEST_SLICE]: testSliceReducer,
});

export default rootReducer;
