"use client";

import styles from "./SettingsSections.module.scss";
import cn from "classnames";
import SettingsField from "@/Pages/globalSettings/Features/SettingsField/SettingsField";
import { SettingField } from "@/Pages/globalSettings/Features/SettingsField/SettingsField.props";
import { updateField } from "@/Store/Slices/testSlice";
import { AppDispatch, RootState } from "@/Store/store";
import { useDispatch, useSelector } from "react-redux";

const useTest = (): SettingField[] => {
  const test = useSelector((state: RootState) => state.testSlice);
  const dispatch = useDispatch<AppDispatch>();

  return [
    {
      title: "Switch 1",
      description: "Enter your switch 1",
      type: "switch",
      initialValue: test.switch1,
      onChange: (value: boolean) =>
        dispatch(updateField({ field: "switch1", value })),
    },
    {
      title: "Switch 2",
      description: "Enter your switch 2",
      type: "switch",
      initialValue: test.switch2,
      onChange: (value: boolean) =>
        dispatch(updateField({ field: "switch2", value })),
    },
    {
      title: "Select",
      description:
        "Description Description Description Description Description Description Description Description Description Description Description Description Description Description Description Description Description Description Description Description Description Description Description",
      type: "select",
      options: ["type1", "type2", "type3"],
      initialValue: test.select,
      onChange: (value: string) =>
        dispatch(updateField({ field: "select", value })),
    },
  ];
};

export default function TestSection() {
  const fields = useTest();

  return (
    <main className={cn(styles["main"])}>
      {fields.map((field) => {
        return <SettingsField key={field.title} field={field} />;
      })}
    </main>
  );
}
