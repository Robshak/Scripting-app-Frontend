import Popup from "reactjs-popup";
import cn from "classnames";
import styles from "./EditDescriptionPopup.module.scss";
import { EditDescriptionPopupProps } from "./EditDescriptionPopup.props";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/Store/store";
import { useState } from "react";
import { updateField } from "@/Store/Slices/userData";
import CrossIcon from "./icons/Cross.svg";
import CustomButton from "@/Shared/UI/CustomButton/CustomButton";

export default function CreateTagsPopup({
  onOverlay,
  open,
  onClose,
}: EditDescriptionPopupProps) {
  const initDescription = useSelector(
    (state: RootState) => state.userDataSlice.description
  );
  const dispatch = useDispatch();

  const [description, setDescription] = useState(initDescription);

  return (
    <>
      <Popup
        open={open}
        onClose={onClose}
        modal
        nested
        overlayStyle={
          onOverlay ? { background: "rgba(0, 0, 0, 0.4)" } : {}
        }
      >
        <div className={cn(styles["popup-content"])}>
          <CrossIcon
            onClick={onClose}
            className={cn(styles["cross-icon"])}
          />
          <h1>Edit description</h1>
          <textarea
            className={cn(styles["description-input"])}
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
          <CustomButton
            className={cn(styles["apply-button"])}
            onClick={() => {
              onClose();
              dispatch(
                updateField({
                  field: "description",
                  value: description,
                })
              );
            }}
          >
            Apply
          </CustomButton>
        </div>
      </Popup>
    </>
  );
}
