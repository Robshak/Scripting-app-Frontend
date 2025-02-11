import styles from "./SettingsField.module.scss";
import cn from "classnames";
import { SettingsFieldProps } from "./SettingsField.props";
import SwitchField from "./FieldsComponents/SwitchField/SwitchField";
import SelectField from "./FieldsComponents/SelectField/SelectField";
import InputField from "./FieldsComponents/InputField/InputField";

export default function SettingsField({
  field,
  className,
  ...props
}: SettingsFieldProps) {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  let SelectedSettingsField: React.ComponentType<any> | null = null;

  if (field.type === "switch") {
    SelectedSettingsField = SwitchField;
  } else if (field.type === "select") {
    SelectedSettingsField = SelectField;
  } else if (field.type === "input") {
    SelectedSettingsField = InputField;
  }

  return (
    <div
      className={cn(styles["settings-field"], className)}
      {...props}
    >
      <div className={cn(styles["title"])}>{field.title}</div>
      <div className={cn(styles["description"])}>
        {field.description}
      </div>
      {SelectedSettingsField && (
        <SelectedSettingsField
          field={field}
          className={cn(styles["field"], {
            [styles["switch-field"]]: field.type === "switch",
            [styles["select-field"]]: field.type === "select",
            [styles["input-field"]]: field.type === "input",
          })}
        />
      )}
    </div>
  );
}
