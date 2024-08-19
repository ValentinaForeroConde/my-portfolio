import React from "react";
import clsx from "clsx";

import styles from "./RainbowButton.module.scss";

interface RainbowButton {
  text: string;
  onClick?: () => void;
  theme?: string;
}

const RainbowButton: React.FC<RainbowButton> = ({ text, onClick, theme }) => {
  const isLightMode = theme === "light";

  return (
    <button
      onClick={onClick}
      className={clsx(styles.button, isLightMode && styles.buttonLight)}
      type="button"
    >
      {text}
    </button>
  );
};

export default RainbowButton;
