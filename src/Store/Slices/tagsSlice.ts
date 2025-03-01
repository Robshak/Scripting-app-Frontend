import { ITag } from "@/Shared/Models/Tags";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
export const TAGS_SLICE = "tagsSlice";

interface ProjectsState {
  data: Record<string, ITag[]>;
}

const initialState: ProjectsState = {
  data: {
    Robshak: [
      {
        id: "1",
        name: "React",
        color: "#61dafb",
      },
      {
        id: "2",
        name: "Next.js",
        color: "#000000",
      },
      {
        id: "3",
        name: "SASS",
        color: "#CD6799",
      },
      {
        id: "4",
        name: "TypeScript",
        color: "#3178c6",
      },
      {
        id: "5",
        name: "UI/UX",
        color: "#ff5722",
      },
    ],
  },
};

const tagsSlice = createSlice({
  name: TAGS_SLICE,
  initialState,
  reducers: {
    addTag: (
      state,
      action: PayloadAction<{ user: string; tag: ITag }>
    ) => {
      const { user, tag } = action.payload;
      if (!state.data[user]) {
        state.data[user] = [];
      }
      if (state.data[user].some((t) => t.name === tag.name)) return;
      state.data[user].push(tag);
    },
    removeTag: (
      state,
      action: PayloadAction<{ user: string; tag: ITag }>
    ) => {
      const { user, tag } = action.payload;
      state.data[user] = state.data[user].filter(
        (t) => t.id !== tag.id
      );
    },
    updateTag: (
      state,
      action: PayloadAction<{
        user: string;
        tag: ITag;
        oldTagName: string;
      }>
    ) => {
      const { user, tag, oldTagName } = action.payload;
      const alreadyExists = state.data[user].some(
        (t) => t.name === tag.name && tag.name !== oldTagName
      );
      if (alreadyExists) return;
      state.data[user] = state.data[user].map((t) => {
        if (t.id === tag.id) {
          return tag;
        }
        return t;
      });
    },
  },
});

export const { addTag, removeTag, updateTag } = tagsSlice.actions;
export default tagsSlice.reducer;
