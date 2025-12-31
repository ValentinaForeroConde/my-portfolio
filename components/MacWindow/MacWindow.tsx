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
    ? `<p>> <span class="highlight">Desarrolladora Frontend</span> especializada en React y Next.js</p>
    <p>Construyo interfaces rápidas, accesibles y bien cuidadas, con foco en UX,
    performance y código limpio.</p>
    <p>4 años de experiencia profesional construyendo aplicaciones web.</p>`
    : `<p>> <span class="highlight">Frontend Engineer</span> specialized in React & Next.js</p>
    <p>I build fast, accessible, and polished user interfaces, with a strong focus on UX, 
    performance, and clean code.</p>
    <p>4 years of professional experience building web applications.</p>`;

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
          dangerouslySetInnerHTML={{ __html: description }}
        />
      </div>
    </div>
  );
};

export default MacWindow;
