import React, { useState, useLayoutEffect, useRef } from "react";
import cn from "classnames";
import styles from "./TagBlock.module.scss";
import { TagBlockProps } from "./TagBlock.props";
import Popup from "reactjs-popup";
import AddTag from "./Components/AddTag/AddTag";
import Tag from "@/Shared/UI/Tag/Tag";

export default function TagBlock({
  title,
  tags,
  onChangeTags,
  className,
}: TagBlockProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const measureRef = useRef<HTMLDivElement>(null);

  const [visibleCount, setVisibleCount] = useState(0);
  const [tagWidths, setTagWidths] = useState<number[]>([]);
  const [addBlockWidth, setAddBlockWidth] = useState<number>(0);

  useLayoutEffect(() => {
    if (!measureRef.current) return;

    const tagElements =
      measureRef.current.querySelectorAll<HTMLElement>(
        `.${styles["fake-tag"]}`
      );
    const widths: number[] = Array.from(tagElements).map(
      (el) => el.offsetWidth + 10 // учитываем gap
    );

    // Измеряем ширину "addBlock"
    let addWidth = 0;
    if (onChangeTags) {
      const addEl = measureRef.current.querySelector(
        `.${styles["add-block"]}`
      ) as HTMLElement | null;
      addWidth = addEl ? addEl.offsetWidth : 0;
    }

    setTagWidths(widths);
    setAddBlockWidth(addWidth);
  }, [tags, onChangeTags]);

  useLayoutEffect(() => {
    if (!containerRef.current) return;
    if (tagWidths.length === 0 && !onChangeTags) return;

    const containerWidth = containerRef.current.offsetWidth;
    let usedWidth = 0;
    let count = 0;

    for (let i = 0; i < tags.length; i++) {
      const w = tagWidths[i] || 0;
      const nextWidth = usedWidth + w;

      const spaceNeeded = onChangeTags
        ? nextWidth + addBlockWidth
        : nextWidth;

      if (spaceNeeded <= containerWidth) {
        count++;
        usedWidth = nextWidth;
      } else {
        break;
      }
    }

    setVisibleCount(count);
  }, [tagWidths, addBlockWidth, tags, onChangeTags]);

  const displayedTags = tags.slice(0, visibleCount);

  return (
    <div
      ref={containerRef}
      className={cn(styles["tagBlock-container"], className)}
    >
      <Popup
        on="hover"
        position="bottom center"
        closeOnDocumentClick
        arrow={false}
        trigger={
          <div className={cn(styles["tags"])}>
            {displayedTags.map((tag) => (
              <Tag key={tag.id} Tag={tag} />
            ))}
          </div>
        }
      >
        <div className={cn(styles["popup-content"])}>
          <div className={cn(styles["popup-list"])}>
            {tags.map((tag) => (
              <Tag key={tag.id} Tag={tag} />
            ))}
          </div>
        </div>
      </Popup>
      {onChangeTags && (
        <AddTag
          className={cn(styles["add-block"])}
          onChangeTags={onChangeTags}
          title={title}
          tags={tags}
        />
      )}

      <div
        className={cn(styles["measure-container"])}
        ref={measureRef}
      >
        {tags.map((tag) => (
          <div key={tag.id} className={cn(styles["fake-tag"])}>
            <Tag Tag={tag} />
          </div>
        ))}
        {onChangeTags && (
          <div className={cn(styles["fake-add-block"])}>
            <AddTag
              onChangeTags={onChangeTags}
              title={title}
              tags={tags}
            />
          </div>
        )}
      </div>
    </div>
  );
}
