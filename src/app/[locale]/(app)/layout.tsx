"use client";

import styles from "./layout.module.scss";
import cn from "classnames";
import SidePanel from "@/Blocks/SidePanel/SidePanel";
import { determinantToState } from "@/Blocks/SidePanel/State";
import { usePathname } from "next/navigation";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathName = usePathname();
  let determinant: string = "";

  if (pathName.split("/").length > 3) {
    determinant = pathName.split("/")[4];
  } else {
    determinant = pathName.split("/")[2];
  }

  console.log(determinant);

  return (
    <div className={cn(styles["layout"])}>
      <SidePanel
        currentButton={determinantToState[determinant].button}
        currentState={determinantToState[determinant].state}
      ></SidePanel>
      <div className={styles["content"]}>{children}</div>
    </div>
  );
}
