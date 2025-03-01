import React, { useState, useEffect, ChangeEvent } from "react";
import Fuse from "fuse.js";
import Popup from "reactjs-popup";
import cn from "classnames";
import styles from "./SearchPanel.module.scss";
import { SearchPanelProps, WithTags } from "./SearchPanel.props";
import SwitchablePoint from "@/Shared/UI/SwitchablePoint/SwitchablePoint";
import Tag from "@/Shared/UI/Tag/Tag";
import { ITag } from "@/Shared/Models/Tags";

export default function SearchPanel<T extends WithTags>({
  data,
  keys,
  onSearch,
  userTags,
  className,
  ...props
}: SearchPanelProps<T>) {
  const [selectedTags, setSelectedTags] = useState<ITag[]>([]);
  const [searchText, setSearchText] = useState("");

  const filterData = () => {
    let filtered = data;
    if (selectedTags.length > 0) {
      filtered = data.filter((item) =>
        selectedTags.every((selectedTag) =>
          item.tags.includes(selectedTag.id)
        )
      );
    }

    if (searchText.trim()) {
      const fuse = new Fuse(filtered, {
        keys,
        threshold: 0.3,
        ignoreLocation: true,
        minMatchCharLength: 1,
        useExtendedSearch: false,
      });
      const results = fuse.search(searchText.trim());
      filtered = results.map((res) => res.item);
    }

    onSearch(filtered);
  };

  useEffect(() => {
    filterData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedTags, searchText]);

  const toggleTag = (tag: ITag) => {
    setSelectedTags((prev) => {
      const exists = prev.some((t) => t.id === tag.id);
      return exists
        ? prev.filter((t) => t.id !== tag.id)
        : [...prev, tag];
    });
  };

  const isSelected = (tag: ITag) =>
    selectedTags.some((selected) => selected.id === tag.id);

  return (
    <div className={cn(styles["search-panel"], className)} {...props}>
      <Popup
        trigger={(isOpen: boolean) => (
          <button
            className={cn(styles["tag-button"], {
              [styles["active-button"]]: isOpen,
            })}
            type="button"
          >
            Add tags
          </button>
        )}
        closeOnDocumentClick
        position="bottom center"
        arrow={false}
      >
        <div className={cn(styles["tags-menu"])}>
          {userTags.map((tag) => {
            const selected = isSelected(tag);
            return (
              <div
                key={tag.id}
                className={cn(styles["tagItem-wrapper"])}
                onClick={() => toggleTag(tag)}
              >
                <Tag Tag={tag} className={cn(styles["tagItem"])} />
                <SwitchablePoint
                  className={cn(styles["check-wrapper"])}
                  isOn={selected}
                  sizeType={"small"}
                />
              </div>
            );
          })}
        </div>
      </Popup>

      <input
        type="text"
        className={cn(styles["search-input"])}
        placeholder="Search..."
        value={searchText}
        onChange={(e: ChangeEvent<HTMLInputElement>) =>
          setSearchText(e.target.value)
        }
      />
    </div>
  );
}
