import styles from "./ProfileRight.module.scss";
import cn from "classnames";
import { useTranslations } from "next-intl";
import { useSelector } from "react-redux";
import { RootState } from "@/Store/store";
import CardList from "@/Widgets/CardList/CardList";
import { useEffect, useRef } from "react";

export default function ProfileRight() {
  const t = useTranslations("profile");
  const userData = useSelector(
    (state: RootState) => state.userDataSlice
  );
  const projects = useSelector(
    (state: RootState) => state.projectsSlice.data[userData.name]
  );

  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;

    const SCROLL_SPEED = 0.3;

    const onWheel = (e: WheelEvent) => {
      if (e.deltaY !== 0) {
        e.preventDefault();
        el.scrollLeft += e.deltaY * SCROLL_SPEED;
      }
    };

    el.addEventListener("wheel", onWheel);
    return () => el.removeEventListener("wheel", onWheel);
  }, []);

  return (
    <div className={cn(styles["right-part"])}>
      <div className={cn(styles["description"])}>
        <h1 className={cn(styles["header"])}>{t("description")}</h1>
        <div className={cn(styles["body"])}>
          {userData.description}
        </div>
      </div>
      <div className={cn(styles["projects"])}>
        <h1 className={cn(styles["header"])}>{t("projects")}</h1>
        <CardList
          ref={scrollRef}
          className={cn(styles["projects-list"])}
          cardList={{
            isList: false,
            type: "projects",
            projects: projects,
          }}
        />
      </div>
    </div>
  );
}
