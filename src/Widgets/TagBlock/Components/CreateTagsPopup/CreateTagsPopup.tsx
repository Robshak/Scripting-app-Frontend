import Popup from "reactjs-popup";
import cn from "classnames";
import styles from "./CreateTagsPopup.module.scss";
import Tag from "../Tag/Tag";
import CustomButton from "@/Shared/UI/CustomButton/CustomButton";
import { CreateTagsPopupProps } from "./CreateTagsPopup.props";
import { useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/Store/store";
import { addTag } from "@/Store/Slices/tagsSlice";
import ArrowBack from "./icons/ArrowBack.svg";

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
  const inputRef = useRef<HTMLInputElement>(null);

  const clickHandler = () => {
    if (inputRef.current) {
      inputRef.current.click();
    }
  };

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
          <div className={cn(styles["main"])}>
            <input
              type="text"
              maxLength={20}
              className={cn(styles["text-input"])}
              value={tagName}
              onChange={(e) => setTagName(e.target.value)}
            />
            <div
              onClick={clickHandler}
              className={cn(styles["color-picker"])}
            >
              <Tag
                Tag={{ name: tagName, color: tagColor }}
                className={cn(styles["tag"])}
              />
              <input
                ref={inputRef}
                type="color"
                className={cn(styles["color-input"])}
                value={tagColor}
                onChange={(e) => setTagColor(e.target.value)}
              />
            </div>
          </div>
          <CustomButton
            className={cn(styles["apply-button"])}
            onClick={() => {
              onClose();
              dispatch(
                addTag({
                  user: userName,
                  tag: { name: tagName, color: tagColor },
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
