import styles from "./ProfileRight.module.scss";
import cn from "classnames";
import { useTranslations } from "next-intl";
import { useSelector } from "react-redux";
import { RootState } from "@/Store/store";
import CardList from "@/Widgets/CardList/CardList";

export default function ProfileRight() {
  const t = useTranslations("profile");
  const userData = useSelector(
    (state: RootState) => state.userDataSlice
  );
  const projects = useSelector(
    (state: RootState) => state.projectsSlice.data[userData.name]
  );

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
          cardList={{
            isList: true,
            type: "projects",
            projects: projects,
          }}
        />
      </div>
    </div>
  );
}
