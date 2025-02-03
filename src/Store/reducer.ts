import { combineReducers } from "@reduxjs/toolkit";
import testSliceReducer, {
  TEST_SLICE,
} from "./Slices/testSlice_counter";

const rootReducer = combineReducers({
  [TEST_SLICE]: testSliceReducer,
});

export default rootReducer;
