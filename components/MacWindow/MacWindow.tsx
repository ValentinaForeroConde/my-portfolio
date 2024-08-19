import React from "react";
import clsx from "clsx";
import Typewriter from "components/Typewriter/Typewriter";

import styles from "./MacWindow.module.scss";

interface MacWindow {
  isLightMode?: boolean;
}

const MacWindow: React.FC<MacWindow> = ({ isLightMode }) => {
  return (
    <div className={clsx(styles.window, isLightMode && styles.windowDark)}>
      <div className={clsx(styles.navbar, isLightMode && styles.navbarDark)}>
        <div className={styles.buttonsContainer}>
          <div className={styles.red} />
          <div className={styles.yellow} />
          <div className={styles.green} />
        </div>
      </div>
      <div className={styles.windowContainer}>
        <Typewriter
          className={clsx(styles.name, isLightMode && styles.nameLight)}
          text={`I'm Valentina Forero`}
          speed={100}
        />

        <code
          className={clsx(styles.mainInfo, isLightMode && styles.mainInfoLight)}
        >
          {`> A dedicated software developer, based in Medellín-Colombia, with 3
          years of professional experience, with a focus on React. I am
          committed to crafting intuitive and responsive UI and UX. driven by a
          dedication to continuous learning and innovation`}
        </code>
      </div>
    </div>
  );
};

export default MacWindow;
