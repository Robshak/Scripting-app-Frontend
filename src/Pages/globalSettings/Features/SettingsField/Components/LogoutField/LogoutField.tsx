import styles from "./LogoutField.module.scss";
import cn from "classnames";
import { LogoutFieldProps } from "./LogoutField.props";
import ConfirmPopup from "@/Popups/Utils/ActionPopup/ConfirmPopup";

export default function LogoutField({
  field,
  className,
  ...props
}: LogoutFieldProps) {
  console.log(className);
  return (
    <ConfirmPopup
      trigger={
        <button className={cn(styles["logout-field"])} {...props}>
          Logout
        </button>
      }
      className={className}
      animated
      text={"Are you sure?"}
      agree={{
        text: "Logout",
        onClick: field.onLogout,
      }}
      disagree={{
        text: "Cancel",
      }}
    />
  );
}
