import styles from "./layout.module.scss";
import cn from "classnames";
import Image from "next/image";
import LanguageDropdown from "@/Features/LanguageDropdown/LanguageDropdown";
import ThemeSwitcher from "@/Features/ThemeSwitcher/ThemeSwitcher";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <div className={cn(styles["changer"])}>
        <LanguageDropdown />
        <ThemeSwitcher />
      </div>
      <div className={cn(styles["body"])}>
        <div className={styles["left-part"]}>
          <Image
            className={styles["logo"]}
            src="/Logo.svg"
            alt="Logo"
            width={477}
            height={372}
            priority
          />
        </div>
        {children}
      </div>
    </>
  );
}
