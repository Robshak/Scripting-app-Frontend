import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export const SETTINGS_SLICE = "settingsSlice";

export type FieldType = "switch" | "input" | "select" | "hide";

interface BaseField {
  id: string;
  title: string;
  description: string;
  type: FieldType;
}

export interface SwitchField extends BaseField {
  type: "switch";
  value: boolean;
}

export interface InputField extends BaseField {
  type: "input";
  value: string | number;
}

export interface SelectField extends BaseField {
  type: "select";
  value: string | number;
  options: Array<string | number>;
}

export interface HideField extends BaseField {
  type: "hide";
  value: string | number;
}

export type SettingField =
  | SwitchField
  | InputField
  | SelectField
  | HideField;

export interface Section {
  id: string;
  name: string;
  fields: Record<string, SettingField>;
}

export interface SettingsState {
  sections: Record<string, Section>;
  currentSectionId: string;
}

const initialState: SettingsState = {
  sections: {
    PersonData: {
      id: "PersonData",
      name: "Person Data",
      fields: {
        name: {
          id: "name",
          title: "Name",
          description: "Enter your name",
          type: "input",
          value: "",
        },
        realName: {
          id: "realName",
          title: "Real Name",
          description: "Enter your real name",
          type: "input",
          value: "",
        },
        description: {
          id: "description",
          title: "Description",
          description: "Enter your description",
          type: "input",
          value: "",
        },
        email: {
          id: "email",
          title: "Email",
          description: "Enter your email",
          type: "input",
          value: "",
        },
        phone: {
          id: "phone",
          title: "Phone",
          description: "Enter your phone",
          type: "input",
          value: "",
        },
        facebook: {
          id: "facebook",
          title: "Facebook",
          description: "Enter your facebook",
          type: "input",
          value: "",
        },
        instagram: {
          id: "instagram",
          title: "Instagram",
          description: "Enter your instagram",
          type: "input",
          value: "",
        },
        twitter: {
          id: "twitter",
          title: "Twitter",
          description: "Enter your twitter",
          type: "input",
          value: "",
        },
        password: {
          id: "password",
          title: "Password",
          description: "Enter your password",
          type: "hide",
          value: "",
        },
        picture: {
          id: "picture",
          title: "Picture",
          description: "Enter your picture",
          type: "hide",
          value: "",
        },
      },
    },
    Test1: {
      id: "Test1",
      name: "Test1",
      fields: {
        switch1: {
          id: "switch1",
          title: "Switch 1",
          description: "Enter your switch 1",
          type: "switch",
          value: false,
        },
        switch2: {
          id: "switch2",
          title: "Switch 2",
          description: "Enter your switch 2",
          type: "switch",
          value: false,
        },
        select: {
          id: "select",
          title: "Select",
          description:
            "Description Description Description Description Description Description Description Description Description Description Description Description Description Description Description Description Description Description Description Description Description Description Description",
          type: "select",
          options: ["type1", "type2", "type3"],
          value: "type1",
        },
      },
    },
    Test2: {
      id: "Test2",
      name: "Test2",
      fields: {},
    },
    Test3: {
      id: "Test3",
      name: "Test3",
      fields: {},
    },
    Test4: {
      id: "Test4",
      name: "Test4",
      fields: {},
    },
  },
  currentSectionId: "PersonData",
};

const settingsSlice = createSlice({
  name: SETTINGS_SLICE,
  initialState,
  reducers: {
    selectSection(state, action: PayloadAction<string>) {
      if (state.sections[action.payload]) {
        state.currentSectionId = action.payload;
      }
    },
    updateField(
      state,
      action: PayloadAction<{
        sectionId: string;
        fieldId: string;
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        value: any;
      }>
    ) {
      const { sectionId, fieldId, value } = action.payload;
      const section = state.sections[sectionId];
      if (section && section.fields[fieldId]) {
        if (section.fields[fieldId].type) {
          section.fields[fieldId].value = value;
        }
      }
    },
  },
});

export const { selectSection, updateField } = settingsSlice.actions;
export default settingsSlice.reducer;
