import { createSlice, PayloadAction } from "@reduxjs/toolkit";
export const PROJECTS_SLICE = "projectsSlice";

export interface ProjectCard {
  picture: string;
  tags: string[];
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
        tags: ["React", "SASS", "TypeScript"],
        title: "Portfolio Website",
        description:
          "A personal portfolio built with React, SASS, and TypeScript to showcase my skills.",
      },
      {
        picture: "",
        tags: ["Next.js", "TypeScript"],
        title: "E-commerce Platform",
        description:
          "An e-commerce web app powered by Next.js and TypeScript for server-side rendering.",
      },
      {
        picture: "",
        tags: ["UI/UX", "React"],
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
      action: PayloadAction<{ user: string; project: ProjectCard }>
    ) => {
      const { user, project } = action.payload;
      if (!state.data[user]) {
        state.data[user] = [];
      }
      state.data[user].push(project);
    },
    changeTags: (
      state,
      action: PayloadAction<{
        user: string;
        project: ProjectCard;
        tags: string[];
      }>
    ) => {
      const { user, project, tags } = action.payload;
      state.data[user] = state.data[user].map((p) => {
        if (p.title === project.title) {
          return { ...p, tags };
        }
        return p;
      });
    },
  },
});

export const { addProject, changeTags } = projectsSlice.actions;
export default projectsSlice.reducer;
