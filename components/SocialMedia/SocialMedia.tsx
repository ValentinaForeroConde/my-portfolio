import React from "react";
import {
  GithubIcon,
  LinkedinIcon,
  XIcon,
} from "@components/Icons/SocialIcons/SocialIcons";

import styles from "./SocialMedia.module.scss";

interface SocialMedia {
  isLightMode?: boolean;
}

const SocialMedia: React.FC<SocialMedia> = ({ isLightMode }) => {
  const socials = [
    {
      icon: <LinkedinIcon isLightMode={isLightMode} />,
      link: "https://www.linkedin.com/in/valentina-forero-conde-911936203/",
    },
    {
      icon: <XIcon isLightMode={isLightMode} />,
      link: "https://x.com/valefoCode",
    },
    {
      icon: <GithubIcon isLightMode={isLightMode} />,
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
