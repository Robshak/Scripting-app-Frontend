import { createSlice, PayloadAction } from "@reduxjs/toolkit";
export const PROJECTS_SLICE = "projectsSlice";

export interface Tag {
  name: string;
  color: string;
}

export interface ProjectCard {
  picture: string;
  tags: Tag[];
  title: string;
  description: string;
}

interface ProjectsState {
  data: Record<string, ProjectCard[]>;
}

const initialState: ProjectsState = {
  data: {
    Robshak: [
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
  },
};

const counterSlice = createSlice({
  name: PROJECTS_SLICE,
  initialState,
  reducers: {
    addProject: (
      state,
      action: PayloadAction<{ user: string; project: ProjectCard }>
    ) => {
      const { user, project } = action.payload;
      if (!state.data[user]) {
        state.data[user] = [];
      }
      state.data[user].push(project);
    },
  },
});

export const { addProject } = counterSlice.actions;
export default counterSlice.reducer;
