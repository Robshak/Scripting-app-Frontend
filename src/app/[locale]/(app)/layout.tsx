import SidePanel from "@/Widgets/SidePanel/SidePanel";
import styles from "./layout.module.scss";
import cn from "classnames";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className={cn(styles["layout"])}>
      <SidePanel />
      <div className={styles["content"]}>{children}</div>
    </div>
  );
}
