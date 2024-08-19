import MacWindow from "components/MacWindow/MacWindow";
import RainbowButton from "components/RainbowButton/RainbowButton";
import clsx from "clsx";

import styles from "./PersonalInfo.module.scss";

interface PersonalInfo {
  theme?: string;
}

const PersonalInfo: React.FC<PersonalInfo> = ({ theme }) => {
  const isLightMode = theme === "light";
  return (
    <div
      className={clsx(styles.container, isLightMode && styles.containerLight)}
    >
      <h1 className={clsx(styles.title, isLightMode && styles.titleLight)}>
        Software Developer
      </h1>

      <div className={styles.personalInfoContainer}>
        <div>
          <img
            className={styles.image}
            src={isLightMode ? "sunglasses.png" : "emoji.png"}
          />
          <div className={styles.contactButton}>
            <RainbowButton
              text="Contact Me!"
              onClick={() => {
                window.location.href = "mailto:valeforero98@gmail.com";
              }}
              theme={theme}
            />
          </div>
        </div>

        <MacWindow isLightMode={isLightMode} />
      </div>
    </div>
  );
};

export default PersonalInfo;
