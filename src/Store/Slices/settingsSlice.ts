import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ProjectCard } from "./types";

export const SETTINGS_SLICE = "settingsSlice";

interface SettingsState {
  PersonData: {
    name: string;
    realName: string;
    description: string;
    email: string;
    phone: string;
    facebook: string;
    instagram: string;
    twitter: string;
    password: string;
    picture: string;
  };
  Projects: ProjectCard[];
}

const initialState: SettingsState = {
  PersonData: {
    name: "",
    realName: "test",
    description: "test",
    email: "test",
    phone: "test",
    facebook: "test",
    instagram: "test",
    twitter: "test",
    password: "",
    picture: "",
  },
  Projects: [
    {
      picture: "",
      tags: [
        { name: "Tag", color: "#7CF088" },
        { name: "Tag", color: "#7DE7EE" },
      ],
      title: "Name",
      description:
        "Description Description Description Description Description Description Description Description",
    },
    {
      picture: "",
      tags: [
        { name: "Tag", color: "#7CF088" },
        { name: "Tag", color: "#7DE7EE" },
      ],
      title: "Name",
      description:
        "Description Description Description Description Description Description Description Description",
    },
  ],
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
