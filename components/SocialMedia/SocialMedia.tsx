import React from "react";

import styles from "./SocialMedia.module.scss";
import {
  GithubIcon,
  LinkedinIcon,
  XIcon,
} from "components/Icons/SocialIcons/SocialIcons";

const SocialMedia = () => {
  const socials = [
    {
      icon: <LinkedinIcon />,
      link: "https://www.linkedin.com/in/valentina-forero-conde-911936203/",
    },
    {
      icon: <XIcon />,
      link: "https://x.com/valefoCode",
    },
    {
      icon: <GithubIcon />,
      link: "https://github.com/ValentinaForeroConde",
    },
  ];

  return (
    <div className={styles.socialMediaContainer}>
      {socials.map((social) => (
        <div
          className={styles.socialMedia}
          key={social.link}
          onClick={() => window.open(social.link)}
        >
          {social.icon}
        </div>
      ))}
    </div>
  );
};

export default SocialMedia;
