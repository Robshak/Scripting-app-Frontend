import { combineReducers } from "@reduxjs/toolkit";
import testSliceReducer, {
  TEST_SLICE,
} from "./Slices/testSlice_counter";
import settingsSliceReducer, {
  SETTINGS_SLICE,
} from "./Slices/settingsSlice";

const rootReducer = combineReducers({
  [TEST_SLICE]: testSliceReducer,
  [SETTINGS_SLICE]: settingsSliceReducer,
});

export default rootReducer;
