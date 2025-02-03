"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { setCookie } from "cookies-next";
import { useLocale } from "next-intl";
import { motion, AnimatePresence } from "framer-motion";
import styles from "./LanguageDropdown.module.scss";
import cn from "classnames";

const languages = [
  { code: "en", label: "EN" },
  { code: "ru", label: "RU" },
];

export default function LanguageDropdown({
  className,
}: {
  className?: string;
}) {
  const router = useRouter();
  const currentLocale = useLocale();
  const [isOpen, setIsOpen] = useState(false);

  const changeLanguage = (lang: string) => {
    if (lang === currentLocale) {
      setIsOpen(false);
      return;
    }

    setCookie("NEXT_LOCALE", lang, { path: "/" });
    router.push(`/${lang}`);
    setIsOpen(false);
  };

  return (
    <div className={cn(styles["dropdown"], className)}>
      <button
        className={styles["trigger"]}
        onClick={() => setIsOpen(!isOpen)}
      >
        {languages.find((l) => l.code === currentLocale)?.label ||
          "EN"}
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.ul
            className={styles["menu"]}
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
          >
            {languages.map(({ code, label }) => (
              <li key={code}>
                <button
                  className={cn(styles["item"], {
                    [styles.active]: currentLocale === code,
                  })}
                  onClick={() => changeLanguage(code)}
                >
                  {label}
                </button>
              </li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>
    </div>
  );
}
