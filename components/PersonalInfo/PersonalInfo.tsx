import Image from "next/image";
import clsx from "clsx";
import RainbowButton from "@components/RainbowButton/RainbowButton";
import MacWindow from "@components/MacWindow/MacWindow";

import styles from "./PersonalInfo.module.scss";

interface PersonalInfo {
  theme?: string;
  isEspanishLanguage?: boolean;
}

const PersonalInfo: React.FC<PersonalInfo> = ({
  theme,
  isEspanishLanguage,
}) => {
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
              text={isEspanishLanguage ? "Contáctame!" : "Contact Me!"}
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

export default PersonalInfo;
