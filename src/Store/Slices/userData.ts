import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export const USER_DATA_SLICE = "userDataSlice";

export interface UserData {
  name: string;
  password: string;
  realName: string;
  description: string;
  email: string;
  phone: string;
  facebook: string;
  instagram: string;
  twitter: string;
  picture: string;
}

const initialState: UserData = {
  name: "",
  password: "",
  realName: "",
  description: "",
  email: "",
  phone: "",
  facebook: "",
  instagram: "",
  twitter: "",
  picture: "",
};

const userDataSlice = createSlice({
  name: USER_DATA_SLICE,
  initialState,
  reducers: {
    updateField(
      state,
      action: PayloadAction<{
        field: keyof UserData;
        value: string;
      }>
    ) {
      const { field, value } = action.payload;
      state[field] = value;
    },
  },
});

export const { updateField } = userDataSlice.actions;
export default userDataSlice.reducer;
