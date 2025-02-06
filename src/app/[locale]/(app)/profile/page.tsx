"use client";

import styles from "./page.module.scss";
import cn from "classnames";
import { RootState } from "@/Store/store";
import { useSelector } from "react-redux";
import InputPicture from "@/Atoms/InputPicture/InputPicture";
import SocilaButton from "@/Atoms/SocialButton/SocialButton";

export default function Profile() {
  const personData = useSelector(
    (state: RootState) => state.settingsSlice.PersonData
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
          <h1 className={cn(styles["header"])}>Contancts</h1>
          <div className={cn(styles["field"])}>
            <span className={cn(styles["field-header"])}>Email:</span>
            <span className={cn(styles["field-body"])}>
              {personData.email}
            </span>
          </div>
          <div className={cn(styles["field"])}>
            <span className={cn(styles["field-header"])}>Phone:</span>
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
        <div className={cn(styles["mini-profile"])}></div>
      </div>
      <div className={cn(styles["right-part"])}>
        <div className={cn(styles["description"])}></div>
        <div className={cn(styles["projects"])}></div>
      </div>
    </main>
  );
}
