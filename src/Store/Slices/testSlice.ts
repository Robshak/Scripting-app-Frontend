import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export const TEST_SLICE = "testSlice";

export interface TestData {
  switch1: boolean;
  switch2: boolean;
  select: string;
}

const initialState: TestData = {
  switch1: false,
  switch2: false,
  select: "type1",
};

const testDataSlice = createSlice({
  name: TEST_SLICE,
  initialState,
  reducers: {
    updateField(
      state,
      action: PayloadAction<{
        field: keyof TestData;
        value: string | boolean;
      }>
    ) {
      const { field, value } = action.payload;
      if (typeof value === typeof state[field]) {
        state[field] = value as never;
      }
    },
  },
});

export const { updateField } = testDataSlice.actions;
export default testDataSlice.reducer;
