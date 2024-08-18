import MacWindow from "components/MacWindow/MacWindow";
import Button from "components/Button/Button";

import styles from "./PersonalInfo.module.scss";

export const PersonalInfo = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Software Developer</h1>

      <div className={styles.personalInfoContainer}>
        <img className={styles.image} src="pic.png" />

        <MacWindow />
      </div>

      <div className={styles.contactButton}>
        <Button label={"Contact Me"} />
      </div>
    </div>
  );
};
