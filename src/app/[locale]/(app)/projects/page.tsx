"use client";

import styles from "./page.module.scss";
import cn from "classnames";
import SearchPanel from "@/Widgets/SearchPanel/SearchPanel";
import { useSelector } from "react-redux";
import { RootState } from "@/Store/store";
import CardList from "@/Widgets/CardList/CardList";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Projects() {
  const router = useRouter();

  const userName = useSelector(
    (state: RootState) => state.userDataSlice.name
  );
  const projects = useSelector(
    (state: RootState) => state.projectsSlice.data[userName]
  );
  const tags = useSelector(
    (state: RootState) => state.tagsSlice.data[userName]
  );
  const [currentProjects, setCurrentProjects] = useState(projects);

  return (
    <div className={cn(styles["projects"])}>
      <SearchPanel
        data={projects}
        keys={["title", "description"]}
        onSearch={setCurrentProjects}
        userTags={tags}
        className={cn(styles["search-panel"])}
      />
      <CardList
        cardList={{
          isList: false,
          type: "projects",
          projects: currentProjects,
          addFunction: () => {
            router.push("/build/project");
          },
        }}
        className={cn(styles["projects-list"])}
      />
    </div>
  );
}
