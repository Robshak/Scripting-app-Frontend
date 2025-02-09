import Projects from "@/Widgets/Projects/Projects";
import styles from "./ProfileRight.module.scss";
import cn from "classnames";
import { useTranslations } from "next-intl";
import { useSelector } from "react-redux";
import { RootState } from "@/Store/store";

export default function ProfileRight() {
  const t = useTranslations("profile");
  const personData = useSelector(
    (state: RootState) =>
      state.settingsSlice.sections["PersonData"].fields
  );

  return (
    <div className={cn(styles["right-part"])}>
      <div className={cn(styles["description"])}>
        <h1 className={cn(styles["header"])}>{t("description")}</h1>
        <div className={cn(styles["body"])}>
          {personData.description.value}
        </div>
      </div>
      <div className={cn(styles["projects"])}>
        <h1 className={cn(styles["header"])}>{t("projects")}</h1>
        <Projects userName="Robshak" />
      </div>
    </div>
  );
}
