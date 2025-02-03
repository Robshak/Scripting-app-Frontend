import { useTranslations } from "next-intl";
import styles from "./page.module.scss";
import LanguageDropdown from "@/Components/LanguageDropdown/LanguageDropdown";
import ThemeSwitcher from "@/Components/ThemeSwitcher/ThemeSwitcher";

export default function Home() {
  const t = useTranslations("");

  return (
    <div className={styles.page}>
      <LanguageDropdown></LanguageDropdown>
      <ThemeSwitcher></ThemeSwitcher>
      {t("test")}
    </div>
  );
}
