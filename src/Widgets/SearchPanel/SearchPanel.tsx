import React, {
  useState,
  useRef,
  useEffect,
  ChangeEvent,
  MouseEvent,
} from "react";
import styles from "./SearchPanel.module.scss";
import cn from "classnames";
import { SearchPanelProps, WithTags } from "./SearchPanel.props";
import { ITag } from "@/Store/Slices/tagsSlice";
import Tag from "@/Shared/UI/Tag/Tag";

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
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const containerRef = useRef<HTMLDivElement | null>(null);

  const filterData = () => {
    let filtered = data;

    if (selectedTags.length > 0) {
      filtered = filtered.filter((item) =>
        selectedTags.every((selectedTag) =>
          item.tags.some((itemTag) => itemTag === selectedTag.name)
        )
      );
    }

    if (searchText.trim()) {
      const lowerText = searchText.toLowerCase();
      filtered = filtered.filter((item) =>
        keys.some((key) => {
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          const fieldValue = (item as any)[key];
          if (typeof fieldValue === "string") {
            return fieldValue.toLowerCase().includes(lowerText);
          }
          return false;
        })
      );
    }

    onSearch(filtered);
  };

  useEffect(() => {
    filterData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedTags, searchText]);

  useEffect(() => {
    function handleClickOutside(
      event: MouseEvent | globalThis.MouseEvent
    ) {
      if (
        containerRef.current &&
        !containerRef.current.contains(event.target as Node)
      ) {
        setIsMenuOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const toggleTag = (tag: ITag) => {
    setSelectedTags((prev) => {
      const exists = prev.some((t) => t.name === tag.name);
      if (exists) {
        return prev.filter((t) => t.name !== tag.name);
      } else {
        return [...prev, tag];
      }
    });
  };

  const isSelected = (tag: ITag) =>
    selectedTags.some((selected) => selected.name === tag.name);

  return (
    <div
      ref={containerRef}
      className={cn(styles["search-panel"], className)}
      {...props}
    >
      <button
        className={cn(styles["tag-button"], {
          [styles["active-button"]]: isMenuOpen,
        })}
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        type="button"
      >
        Add tags
      </button>

      {isMenuOpen && (
        <div className={cn(styles["tags-menu"])}>
          {userTags.map((tag) => {
            const selected = isSelected(tag);
            return (
              <div
                key={tag.name}
                className={cn(styles["tagItem-wrapper"])}
                onClick={() => toggleTag(tag)}
              >
                <Tag Tag={tag} className={cn(styles["tagItem"])} />
                <div className={cn(styles["check-wrapper"])}>
                  <div
                    className={cn(styles["check-point"], {
                      [styles["active-tag"]]: selected,
                    })}
                  />
                </div>
              </div>
            );
          })}
        </div>
      )}

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
