import React, { useState } from "react";
import clsx from "clsx";

import styles from "./LanguageToggle.module.scss";

interface LanguageToggle {
  theme?: string;
}

const LanguageToggle: React.FC<LanguageToggle> = ({ theme }) => {
  const [language, setLanguage] = useState<"EN" | "ES">("EN");
  const isLightMode = theme === "light";

  const toggleLanguage = () => {
    setLanguage((prevLanguage) => (prevLanguage === "EN" ? "ES" : "EN"));
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
        <span className={language === "EN" ? styles.active : ""}>EN</span>
        <span className={language === "ES" ? styles.active : ""}>ES</span>
      </div>
    </div>
  );
};

export default LanguageToggle;
