import React from "react";
import ThemeToggle from "@components/ThemeToggle/ThemeToggle";
import DownloadLink from "@components/DownloadLink/DownloadLink";
import LanguageToggle from "@components/LanguageToggle/LanguageToggle";

import styles from "./Header.module.scss";

interface Header {
  theme?: string;
  isEspanishLanguage?: boolean;
}

const Header: React.FC<Header> = ({ theme, isEspanishLanguage }) => {
  return (
    <div className={styles.header}>
      <DownloadLink theme={theme} isEspanishLanguage={isEspanishLanguage} />
      <ThemeToggle />
      <LanguageToggle theme={theme} />
    </div>
  );
};

export default Header;
