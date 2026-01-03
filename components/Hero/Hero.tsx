import Image from "next/image";
import clsx from "clsx";
import RainbowButton from "@components/RainbowButton/RainbowButton";
import MacWindow from "@components/MacWindow/MacWindow";

import styles from "./Hero.module.scss";

interface Hero {
  theme?: string;
  isEspanishLanguage?: boolean;
}

const Hero: React.FC<Hero> = ({ theme, isEspanishLanguage }) => {
  const isLightMode = theme === "light";

  return (
    <div
      className={clsx(styles.container, isLightMode && styles.containerLight)}
    >
      <h1
        className={clsx(
          styles.title,
          isLightMode && styles.titleLight,
          isEspanishLanguage && styles.espanishTitle
        )}
      >
        {isEspanishLanguage ? (
          <div>
            Desarrolladora <br />
            De <br />
            Software
          </div>
        ) : (
          "Software Developer"
        )}
      </h1>

      <div className={styles.personalInfoContainer}>
        <div>
          <Image
            className={styles.image}
            src={isLightMode ? "/sunglasses.png" : "/emoji.png"}
            alt="emoji in a laptop"
            width={200}
            height={210}
          />
          <div className={styles.contactButton}>
            <RainbowButton
              text={isEspanishLanguage ? "Hablemos!" : "Let's Talk!"}
              onClick={() => {
                window.location.href = "mailto:valeforero98@gmail.com";
              }}
              theme={theme}
            />
          </div>
        </div>

        <MacWindow
          isLightMode={isLightMode}
          isEspanishLanguage={isEspanishLanguage}
        />
      </div>
    </div>
  );
};

export default Hero;
