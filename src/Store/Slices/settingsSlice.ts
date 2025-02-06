import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export const SETTINGS_SLICE = "settingsSlice";

interface SettingsState {
  PersonData: {
    name: string;
    realName: string;
    email: string;
    phone: string;
    facebook: string;
    instagram: string;
    twitter: string;
    password: string;
    picture: string;
  };
  InGeneral: {
    test: string;
  };
}

const initialState: SettingsState = {
  PersonData: {
    name: "",
    realName: "test",
    email: "test",
    phone: "test",
    facebook: "test",
    instagram: "test",
    twitter: "test",
    password: "",
    picture: "",
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

export const { setPersonParam } = settingsSlice.actions;
export default settingsSlice.reducer;
