"use client";

import styles from "./page.module.scss";
import cn from "classnames";
import ProfileLeft from "./Components/ProfileLeft/ProfileLeft";
import ProfileRight from "./Components/ProfileRight/ProfileRight";

export default function ProfilePage() {
  return (
    <main className={cn(styles["main"])}>
      <ProfileLeft />
      <ProfileRight />
    </main>
  );
}
