import { combineReducers } from "@reduxjs/toolkit";
import testSliceReducer, {
  PROJECTS_SLICE,
} from "./Slices/projectsSlice";
import settingsSliceReducer, {
  SETTINGS_SLICE,
} from "./Slices/settingsSlice";

const rootReducer = combineReducers({
  [PROJECTS_SLICE]: testSliceReducer,
  [SETTINGS_SLICE]: settingsSliceReducer,
});

export default rootReducer;
