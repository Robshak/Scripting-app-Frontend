import cn from "classnames";
import styles from "./DescriptionField.module.scss";
import { DescriptionFieldProps } from "./DescriptionField.props";
import { useState } from "react";
import EditDescriptionPopup from "@/Popups/SettingsPopups/EditDescriptionPopup/EditDescriptionPopup";

export default function DescriptionField({
  className,
  ...props
}: DescriptionFieldProps) {
  const [open, setOpen] = useState(false);

  return (
    <button
      onClick={() => setOpen(true)}
      className={cn(styles["description-field"], className)}
      {...props}
    >
      <div className={cn(styles["description-field-title"])}>
        Edit description
      </div>
      <EditDescriptionPopup
        open={open}
        onClose={() => setOpen(false)}
        onOverlay={true}
      />
    </button>
  );
}
