import React from "react";
import ThemeToggle from "@components/ThemeToggle/ThemeToggle";
import DownloadLink from "@components/DownloadLink/DownloadLink";

import styles from "./Header.module.scss";

interface Header {
  theme?: string;
}

const Header: React.FC<Header> = ({ theme }) => {
  return (
    <div className={styles.header}>
      <DownloadLink theme={theme} />
      <ThemeToggle />
    </div>
  );
};

export default Header;
