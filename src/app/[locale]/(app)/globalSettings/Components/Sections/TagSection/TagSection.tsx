import { useSelector } from "react-redux";
import styles from "./TagSection.module.scss";
import cn from "classnames";
import { RootState } from "@/Store/store";
import CreateTagsPopup from "@/Widgets/TagBlock/Components/CreateTagsPopup/CreateTagsPopup";
import { useState } from "react";
import TagField from "./Components/TagField/TagField";

export default function TagSection() {
  const userName = useSelector(
    (state: RootState) => state.userDataSlice.name
  );
  const tags = useSelector(
    (state: RootState) => state.tagsSlice.data[userName]
  );

  const [openCreatePopup, setOpenCreatePopup] = useState(false);

  return (
    <div className={cn(styles["tag-list"])}>
      {tags.map((tag, idx) => {
        const isLast = idx === tags.length - 1;
        return (
          <TagField
            tag={tag}
            key={tag.name}
            className={cn({
              [styles["tag-field"]]: !isLast,
            })}
          />
        );
      })}
      <button
        className={cn(styles["add-tag-button"])}
        onClick={() => setOpenCreatePopup(true)}
      >
        Add tag
      </button>
      <CreateTagsPopup
        open={openCreatePopup}
        onClose={() => setOpenCreatePopup(false)}
        onOverlay
      />
    </div>
  );
}
