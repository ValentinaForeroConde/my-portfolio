import React from "react";

import styles from "./RainbowButton.module.scss";

interface RainbowButton {
  text: string;
  onClick?: () => void;
}

const RainbowButton: React.FC<RainbowButton> = ({ text, onClick }) => {
  return (
    <button onClick={onClick} className={styles.button} type="button">
      {text}
    </button>
  );
};

export default RainbowButton;
