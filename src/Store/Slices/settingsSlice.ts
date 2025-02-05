import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export const SETTINGS_SLICE = "settingsSlice";

interface SettingsState {
  PersonData: {
    name: string;
    surname: string;
    password: string;
  };
  InGeneral: {
    test: string;
  };
}

const initialState: SettingsState = {
  PersonData: {
    name: "",
    surname: "",
    password: "",
  },
  InGeneral: {
    test: "",
  },
};

const settingsSlice = createSlice({
  name: SETTINGS_SLICE,
  initialState,
  reducers: {
    setPersonParam(
      state,
      action: PayloadAction<{
        field: keyof SettingsState["PersonData"];
        value: string;
      }>
    ) {
      const field = action.payload.field;
      const value = action.payload.value;
      state.PersonData[field] = value;
    },
  },
});

export const {} = settingsSlice.actions;
export default settingsSlice.reducer;
