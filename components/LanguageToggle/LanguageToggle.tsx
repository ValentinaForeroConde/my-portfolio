import React from "react";
import { useStore } from "@hooks/useStore";
import clsx from "clsx";

import styles from "./LanguageToggle.module.scss";

interface LanguageToggle {
  theme?: string;
}

const LanguageToggle: React.FC<LanguageToggle> = ({ theme }) => {
  const language = useStore((state) => state.language);
  const setLanguage = useStore((state) => state.setLanguage);
  const isEnglishLanguage = language === "EN" ? true : false;
  const changeLanguage = isEnglishLanguage ? "ES" : "EN";
  const isLightMode = theme === "light";

  const toggleLanguage = () => {
    setLanguage(changeLanguage);
  };

  return (
    <div className={clsx(styles.toggleWrapper)} onClick={toggleLanguage}>
      <div
        className={clsx(
          styles.toggle,
          language === "EN" ? styles.en : "",
          isLightMode && styles.toggleLight
        )}
      >
        <span className={language === "ES" ? styles.active : ""}>ES</span>
        <span className={language === "EN" ? styles.active : ""}>EN</span>
      </div>
    </div>
  );
};

export default LanguageToggle;
