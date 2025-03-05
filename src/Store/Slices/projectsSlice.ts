import { IProjectCard } from "@/Shared/Models/Projects";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
export const PROJECTS_SLICE = "projectsSlice";

interface ProjectsState {
  data: Record<string, IProjectCard[]>;
}

const initialState: ProjectsState = {
  data: {
    Robshak: [
      {
        id: "1",
        picture: "",
        tags: ["1", "2", "3"],
        title: "Portfolio Website",
        description:
          "A personal portfolio built with React, SASS, and TypeScript to showcase my skills.",
      },
      {
        id: "2",
        picture: "",
        tags: ["2", "4"],
        title: "E-commerce Platform",
        description:
          "An e-commerce web app powered by Next.js and TypeScript for server-side rendering.",
      },
      {
        id: "3",
        picture: "",
        tags: ["5", "1"],
        title: "UI/UX Case Study",
        description:
          "A deep dive into user experience design, implementing best practices in React.",
      },
    ],
  },
};

const projectsSlice = createSlice({
  name: PROJECTS_SLICE,
  initialState,
  reducers: {
    addProject: (
      state,
      action: PayloadAction<{ user: string; project: IProjectCard }>
    ) => {
      const { user, project } = action.payload;
      if (!state.data[user]) {
        state.data[user] = [];
      }
      if (state.data[user].some((p) => p.title === project.title))
        return;
      state.data[user].push(project);
    },
    changeTags: (
      state,
      action: PayloadAction<{
        user: string;
        project: IProjectCard;
        tags: string[];
      }>
    ) => {
      const { user, project, tags } = action.payload;
      state.data[user] = state.data[user].map((p) => {
        if (p.id === project.id) {
          return { ...p, tags };
        }
        return p;
      });
    },
  },
});

export const { addProject, changeTags } = projectsSlice.actions;
export default projectsSlice.reducer;
