import React, { ReactNode } from "react";
import clsx from "clsx";
import Button from "@components/Button/Button";

import styles from "./ExperienceSection.module.scss";

interface ExperienceSectionProps {
  workExperience: {
    title: string;
    company: string;
    location: string;
    duration: string;
    description: ReactNode;
    technologies: {
      name: string;
      link: string;
    }[];
  }[];
  isLightMode?: boolean;
}

const ExperienceSection: React.FC<ExperienceSectionProps> = ({
  workExperience,
  isLightMode,
}) => {
  return (
    <div className={styles.container}>
      {workExperience?.map((experience) => (
        <div
          key={experience.title}
          className={clsx(styles.section, isLightMode && styles.sectionLight)}
        >
          <div className={styles.header}>
            <div className={styles.companyTitle}>
              <h2 className={styles.company}>{experience.company}</h2>
              <span
                className={clsx(styles.title, isLightMode && styles.titleLight)}
              >
                - {experience.title}
              </span>
            </div>
            <div className={styles.durationLocation}>
              {experience.duration} - {experience.location}
            </div>
          </div>
          <div className={styles.description}>{experience.description}</div>
          <div className={styles.technologies}>
            {experience.technologies.map((technology) => (
              <Button
                key={technology.name}
                label={technology.name}
                onClick={() => {
                  window.open(technology.link);
                }}
                isLightMode={isLightMode}
              />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default ExperienceSection;
