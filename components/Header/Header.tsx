import React from "react";
import ThemeToggle from "@components/ThemeToggle/ThemeToggle";
import DownloadLink from "@components/DownloadLink/DownloadLink";

import styles from "./Header.module.scss";

const Header = () => {
  return (
    <div className={styles.header}>
      <DownloadLink />
      <ThemeToggle />
    </div>
  );
};

export default Header;
