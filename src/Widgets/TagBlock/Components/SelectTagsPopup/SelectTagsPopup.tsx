import Popup from "reactjs-popup";
import cn from "classnames";
import styles from "./SelectTagsPopup.module.scss";
import Tag from "../Tag/Tag";
import SwitchablePoint from "@/Shared/UI/SwitchablePoint/SwitchablePoint";
import CustomButton from "@/Shared/UI/CustomButton/CustomButton";
import { SelectTagsPopupProps } from "./SelectTagsPopup.props";
import CreateTagsPopup from "../CreateTagsPopup/CreateTagsPopup";
import { useState } from "react";
import CrossIcon from "./icons/Cross.svg";

export default function SelectTagsPopup({
  title,
  allTags,
  selectedTags,
  setSelectedTags,
  open,
  onClose,
  onApply,
}: SelectTagsPopupProps) {
  const [openCreatePopup, setOpenCreatePopup] = useState(false);

  return (
    <>
      <Popup
        open={open}
        onClose={onClose}
        modal
        nested
        overlayStyle={{ background: "rgba(0, 0, 0, 0.4)" }}
      >
        <div className={cn(styles["popup-content"])}>
          <CrossIcon
            onClick={onClose}
            className={cn(styles["cross-icon"])}
          />
          <h1>{title}</h1>
          <div className={cn(styles["tags"])}>
            {allTags.map((tag, index) => (
              <div
                key={tag.name}
                className={cn(styles["tag"], {
                  [styles["selected"]]: selectedTags[index],
                })}
                onClick={() => {
                  setSelectedTags((prev) => {
                    const newSelectedTags = [...prev];
                    newSelectedTags[index] = !newSelectedTags[index];
                    return newSelectedTags;
                  });
                }}
              >
                <Tag Tag={tag} />
                <SwitchablePoint
                  className={cn(styles["check-wrapper"])}
                  isOn={selectedTags[index]}
                  sizeType="small"
                />
              </div>
            ))}
            <button
              onClick={() => setOpenCreatePopup(true)}
              className={cn(styles["new-tag-button"])}
            >
              New Tag
            </button>
          </div>
          <CustomButton
            className={cn(styles["apply-button"])}
            onClick={() => {
              onApply();
              onClose();
            }}
          >
            Apply
          </CustomButton>
        </div>
      </Popup>
      <CreateTagsPopup
        open={openCreatePopup}
        onClose={() => setOpenCreatePopup(false)}
      />
    </>
  );
}
