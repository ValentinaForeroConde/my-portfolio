import { Typewriter } from "components/Typewriter/Typewriter";

import styles from "./MacWindow.module.scss";

const MacWindow = () => {
  return (
    <div className={styles.window}>
      <div className={styles.navbar}>
        <div className={styles.buttonsContainer}>
          <div className={styles.red} />
          <div className={styles.yellow} />
          <div className={styles.green} />
        </div>
      </div>
      <div className={styles.windowContainer}>
        <Typewriter
          className={styles.name}
          text={`I'm Valentina Forero`}
          speed={100}
        />

        <code className={styles.mainInfo}>
          A dedicated software developer, based in Medellín-Colombia, with 3
          years of professional experience, with a focus on React. I am
          committed to crafting intuitive and responsive UI and UX. driven by a
          dedication to continuous learning and innovation
        </code>
      </div>
    </div>
  );
};

export default MacWindow;
