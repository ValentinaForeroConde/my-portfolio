import React from "react";
import clsx from "clsx";

import styles from "./Button.module.scss";

interface ButtonProps {
  label: string;
  onClick?: () => void;
  isLightMode?: boolean;
}

const Button: React.FC<ButtonProps> = ({ label, onClick, isLightMode }) => {
  return (
    <button
      className={clsx(styles.button, isLightMode && styles.buttonLight)}
      onClick={onClick}
    >
      {label}
    </button>
  );
};

export default Button;
