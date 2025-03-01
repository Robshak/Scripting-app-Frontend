import { IUserData } from "@/Shared/Models/UserData";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export const USER_DATA_SLICE = "userDataSlice";

const initialState: IUserData = {
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
        field: keyof IUserData;
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
