import React from "react";
import Button from "components/Button/Button";

import styles from "./ExperienceSection.module.scss";

interface ExperienceSectionProps {
  title: string;
  company: string;
  location: string;
  duration: string;
  description: string;
  technologies: string[];
}

const ExperienceSection: React.FC<ExperienceSectionProps> = ({
  title,
  company,
  location,
  duration,
  description,
  technologies,
}) => {
  return (
    <div className={styles.section}>
      <div className={styles.header}>
        <div className={styles.companyTitle}>
          <h2 className={styles.company}>{company}</h2>
          <span className={styles.title}> - {title}</span>
        </div>
        <p className={styles.durationLocation}>
          {duration} - {location}
        </p>
      </div>
      <p className={styles.description}>{description}</p>
      <div className={styles.technologies}>
        {technologies.map((tech) => (
          <Button key={tech} label={tech} />
        ))}
      </div>
    </div>
  );
};

export default ExperienceSection;
