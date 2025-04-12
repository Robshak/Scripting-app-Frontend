import styles from "./SettingsField.module.scss";
import cn from "classnames";
import {
  SettingField,
  SettingsFieldProps,
} from "./SettingsField.props";
import SwitchField from "./Components/SwitchField/SwitchField";
import SelectField from "./Components/SelectField/SelectField";
import InputField from "./Components/InputField/InputField";
import LogoutField from "./Components/LogoutField/LogoutField";
import DescriptionField from "./Components/DescriptionField/DescriptionField";

export default function SettingsField({
  field,
  className,
  ...props
}: SettingsFieldProps) {
  // Define a more specific type for the field component
  let SelectedSettingsField: React.ComponentType<{
    field: typeof field;
    className?: string;
  }> | null = null;

  if (field.type === "switch") {
    SelectedSettingsField = SwitchField as React.ComponentType<{
      field: SettingField;
      className?: string;
    }>;
  } else if (field.type === "select") {
    SelectedSettingsField = SelectField as React.ComponentType<{
      field: SettingField;
      className?: string;
    }>;
  } else if (field.type === "input") {
    SelectedSettingsField = InputField as React.ComponentType<{
      field: SettingField;
      className?: string;
    }>;
  } else if (field.type === "logout") {
    SelectedSettingsField = LogoutField as React.ComponentType<{
      field: SettingField;
      className?: string;
    }>;
  } else if (field.type === "description") {
    SelectedSettingsField = DescriptionField as React.ComponentType<{
      field: SettingField;
      className?: string;
    }>;
  } else {
    SelectedSettingsField = null;
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
            [styles["logout-field"]]: field.type === "logout",
          })}
        />
      )}
    </div>
  );
}
