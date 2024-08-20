import React from "react";
import clsx from "clsx";
import Typewriter from "@components/Typewriter/Typewriter";

import styles from "./MacWindow.module.scss";

interface MacWindow {
  isLightMode?: boolean;
  isEspanishLanguage?: boolean;
}

const MacWindow: React.FC<MacWindow> = ({
  isLightMode,
  isEspanishLanguage,
}) => {
  const name = isEspanishLanguage
    ? "Soy Valentina Forero"
    : `I'm Valentina Forero`;
  const description = isEspanishLanguage
    ? `> Una desarrolladora de software apasionado, radicada en Medellín-Colombia, 
  con 3 años de experiencia profesional especializada en React. Estoy comprometida
  con la creación de interfaces intuitivas, receptivas y fáciles de usar que
  ofrezcan experiencias excepcionales al usuario. Mi trabajo está impulsado
  por un compromiso con el aprendizaje continuo, la innovación y la excelencia
  en el diseño de UI/UX.`
    : `> A passionate software developer based in Medellín, Colombia, with 3 years
  of professional experience specializing in React. I am dedicated to creating
  intuitive, responsive, and user-friendly interfaces that provide exceptional user
  experiences. My work is driven by a commitment to continuous learning,
  innovation, and excellence in UI/UX design.`;

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
          text={name}
          speed={100}
        />

        <code
          className={clsx(styles.mainInfo, isLightMode && styles.mainInfoLight)}
        >
          {description}
        </code>
      </div>
    </div>
  );
};

export default MacWindow;
