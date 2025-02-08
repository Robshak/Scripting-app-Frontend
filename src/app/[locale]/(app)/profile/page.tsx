"use client";

import styles from "./page.module.scss";
import cn from "classnames";
import { RootState } from "@/Store/store";
import { useSelector } from "react-redux";
import InputPicture from "@/Atoms/InputPicture/InputPicture";
import SocilaButton from "@/Atoms/SocialButton/SocialButton";
import MiniProfile from "@/Blocks/MiniProfile/MiniProfile";
import ProjectCard from "@/Blocks/ProjectCard/ProjectCard";
import { useTranslations } from "next-intl";

export default function Profile() {
  const t = useTranslations("profile");
  const personData = useSelector(
    (state: RootState) => state.settingsSlice.PersonData
  );
  const projects = useSelector(
    (state: RootState) => state.settingsSlice.Projects
  );

  return (
    <main className={cn(styles["main"])}>
      <div className={cn(styles["left-part"])}>
        <div className={cn(styles["user-summary"])}>
          <InputPicture className={cn(styles["avatar"])} />
          <div className={cn(styles["name"])}>{personData.name}</div>
          <div className={cn(styles["divider"])} />
          <div className={cn(styles["real-name"])}>
            {personData.realName}
          </div>
        </div>
        <div className={cn(styles["contacts"])}>
          <h1 className={cn(styles["header"])}>{t("contacts")}</h1>
          <div className={cn(styles["field"])}>
            <span className={cn(styles["field-header"])}>
              {`${t("email")}: `}
            </span>
            <span className={cn(styles["field-body"])}>
              {personData.email}
            </span>
          </div>
          <div className={cn(styles["field"])}>
            <span className={cn(styles["field-header"])}>{`${t(
              "phone"
            )}:`}</span>
            <span className={cn(styles["field-body"])}>
              {personData.phone}
            </span>
          </div>
          <div className={cn(styles["social"])}>
            {personData.facebook ? (
              <SocilaButton socialType="facebook" />
            ) : (
              <></>
            )}
            {personData.instagram ? (
              <SocilaButton socialType="instagram" />
            ) : (
              <></>
            )}
            {personData.twitter ? (
              <SocilaButton socialType="twitter" />
            ) : (
              <></>
            )}
          </div>
        </div>
        <div className={cn(styles["mini-profile"])}>
          <h1>{t("miniProfile")}</h1>
          <MiniProfile></MiniProfile>
        </div>
      </div>
      <div className={cn(styles["right-part"])}>
        <div className={cn(styles["description"])}>
          <h1 className={cn(styles["header"])}>{t("description")}</h1>
          <div className={cn(styles["body"])}>
            {personData.description}
          </div>
        </div>
        <div className={cn(styles["projects"])}>
          <h1 className={cn(styles["header"])}>{t("projects")}</h1>
          <div className={cn(styles["projects-list"])}>
            {projects.map((project, idx) => (
              <ProjectCard
                number={idx}
                key={idx}
                className={cn(styles["project-card"])}
              />
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
