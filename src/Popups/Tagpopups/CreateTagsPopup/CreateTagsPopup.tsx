import Popup from "reactjs-popup";
import cn from "classnames";
import styles from "./CreateTagsPopup.module.scss";
import CustomButton from "@/Shared/UI/CustomButton/CustomButton";
import { CreateTagsPopupProps } from "./CreateTagsPopup.props";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/Store/store";
import { addTag } from "@/Store/Slices/tagsSlice";
import ArrowBack from "./icons/ArrowBack.svg";
import TagConstructor from "@/Features/TagConstructor/TagConstructor";
import { generateRandomId } from "@/Shared/Utils/generate";

export default function CreateTagsPopup({
  onOverlay,
  open,
  onClose,
}: CreateTagsPopupProps) {
  const userName = useSelector(
    (state: RootState) => state.userDataSlice.name
  );
  const dispatch = useDispatch();

  const [tagName, setTagName] = useState("");
  const [tagColor, setTagColor] = useState("#000000");

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
          <div
            className={cn(styles["back-icon-wrapper"])}
            onClick={onClose}
          >
            <ArrowBack className={cn(styles["back-icon"])} />
          </div>
          <h1>Create a new tag</h1>
          <TagConstructor
            tagName={tagName}
            tagColor={tagColor}
            onChangeName={setTagName}
            onChangeColor={setTagColor}
            className={styles["tag-constructor"]}
          />
          <CustomButton
            className={cn(styles["apply-button"])}
            onClick={() => {
              onClose();
              dispatch(
                addTag({
                  user: userName,
                  tag: {
                    id: generateRandomId(),
                    name: tagName,
                    color: tagColor,
                  },
                })
              );
            }}
          >
            Create
          </CustomButton>
        </div>
      </Popup>
    </>
  );
}
