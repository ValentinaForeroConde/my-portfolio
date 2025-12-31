import clsx from "clsx";
import React from "react";

import styles from "./Title.module.scss";

interface TitleProps {
  isLightMode: boolean;
  text: string;
}

const Title: React.FC<TitleProps> = ({ isLightMode, text }) => {
  return (
    <h1
      className={clsx(
        styles.sectionTitle,
        isLightMode && styles.sectionTitleLight
      )}
    >
      {text}
    </h1>
  );
};

export default Title;
