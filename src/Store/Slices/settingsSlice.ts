import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export const SETTINGS_SLICE = "settingsSlice";

interface SettingsState {
  activeSection: string;
}

const initialState: SettingsState = {
  activeSection: "Profile",
};

const settingsSlice = createSlice({
  name: SETTINGS_SLICE,
  initialState,
  reducers: {
    selectSection(state, action: PayloadAction<string>) {
      state.activeSection = action.payload;
    },
  },
});

export const { selectSection } = settingsSlice.actions;
export default settingsSlice.reducer;
