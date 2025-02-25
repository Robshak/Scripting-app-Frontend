import { ITag } from "@/Store/Slices/tagsSlice";
import { RootState } from "@/Store/store";
import { useMemo } from "react";
import { useSelector } from "react-redux";

/**
 * Хук, который возвращает массив тегов (ITag[]) на основе массива названий.
 */
export function useTagsFromNames(tagNames: string[]): ITag[] {
  const userName = useSelector(
    (state: RootState) => state.userDataSlice.name
  );
  const allTags = useSelector(
    (state: RootState) => state.tagsSlice.data[userName]
  );

  const tagMap = useMemo(() => {
    const map: Record<string, ITag> = {};
    allTags.forEach((tag) => {
      map[tag.name] = tag;
    });
    return map;
  }, [allTags]);

  return useMemo(() => {
    return tagNames
      .map((name) => tagMap[name])
      .filter((tag): tag is ITag => Boolean(tag));
  }, [tagNames, tagMap]);
}
