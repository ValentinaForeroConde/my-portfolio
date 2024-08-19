import MacWindow from "components/MacWindow/MacWindow";
import RainbowButton from "components/RainbowButton/RainbowButton";

import styles from "./PersonalInfo.module.scss";

const PersonalInfo = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Software Developer</h1>

      <div className={styles.personalInfoContainer}>
        <div>
          <img className={styles.image} src="emoji.png" />
          <div className={styles.contactButton}>
            <RainbowButton
              text="Contact Me!"
              onClick={() => {
                window.location.href = "mailto:valeforero98@gmail.com";
              }}
            />
          </div>
        </div>

        <MacWindow />
      </div>
    </div>
  );
};

export default PersonalInfo;
