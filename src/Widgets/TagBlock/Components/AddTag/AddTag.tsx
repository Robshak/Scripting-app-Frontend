import styles from "./AddTag.module.scss";
import cn from "classnames";
import { AddBlockProps } from "./AddTag.props";
import PlusIcon from "./icons/Plus.svg";
import { RootState } from "@/Store/store";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import SelectTagsPopup from "../SelectTagsPopup/SelectTagsPopup";

export default function AddTag({
  title,
  tags,
  onChangeTags,
  className,
  ...props
}: AddBlockProps) {
  const userName = useSelector(
    (state: RootState) => state.userDataSlice.name
  );
  const allTags = useSelector(
    (state: RootState) => state.tagsSlice.data[userName]
  );

  const [openMainPopup, setOpenMainPopup] = useState(false);
  const [selectedTags, setSelectedTags] = useState<boolean[]>(
    Array(allTags.length).fill(false)
  );

  useEffect(() => {
    for (const tag of tags) {
      setSelectedTags((prev) => {
        const newSelectedTags = [...prev];
        newSelectedTags[
          allTags.findIndex((t) => t.name === tag.name)
        ] = true;
        return newSelectedTags;
      });
    }
  }, [allTags, tags]);

  const applyHandler = () => {
    const res = allTags.filter((_, index) => selectedTags[index]);
    onChangeTags(res);
  };

  return (
    <>
      <PlusIcon className={cn(styles["hide-icon"], styles["icon"])} />
      <div
        className={cn(styles["add-block"], className)}
        onClick={() => setOpenMainPopup(true)}
        {...props}
      >
        <PlusIcon className={cn(styles["icon"])} />
      </div>
      <SelectTagsPopup
        title={title}
        allTags={allTags}
        selectedTags={selectedTags}
        setSelectedTags={setSelectedTags}
        open={openMainPopup}
        onClose={() => setOpenMainPopup(false)}
        onApply={applyHandler}
      />
    </>
  );
}
