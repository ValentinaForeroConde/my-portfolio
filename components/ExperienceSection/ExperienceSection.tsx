import React, { ReactNode, useState } from "react";
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
  isEspanishLanguage?: boolean;
}

const INITIAL_ITEMS = 2;

const ExperienceSection: React.FC<ExperienceSectionProps> = ({
  workExperience,
  isLightMode,
  isEspanishLanguage,
}) => {
  const [showAll, setShowAll] = useState(false);

  const hasMoreItems = workExperience?.length > INITIAL_ITEMS;
  const peekItem =
    !showAll && hasMoreItems ? workExperience?.[INITIAL_ITEMS] : null;

  const visibleExperiences = showAll
    ? workExperience
    : workExperience?.slice(0, INITIAL_ITEMS);

  return (
    <div className={styles.container}>
      {visibleExperiences?.map((experience) => (
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

      {peekItem && (
        <div className={styles.peekWrapper}>
          <div
            className={clsx(
              styles.section,
              styles.peekSection,
              isLightMode && styles.sectionLight
            )}
          >
            <div className={styles.header}>
              <div className={styles.companyTitle}>
                <h2 className={styles.company}>{peekItem.company}</h2>
                <span
                  className={clsx(
                    styles.title,
                    isLightMode && styles.titleLight
                  )}
                >
                  - {peekItem.title}
                </span>
              </div>
              <div className={styles.durationLocation}>
                {peekItem.duration} - {peekItem.location}
              </div>
            </div>
          </div>
          <div
            className={clsx(
              styles.fadeOverlay,
              isLightMode && styles.fadeOverlayLight
            )}
          />
        </div>
      )}

      {hasMoreItems && (
        <button
          className={clsx(
            styles.showMoreBtn,
            isLightMode && styles.showMoreBtnLight
          )}
          onClick={() => setShowAll(!showAll)}
        >
          {showAll
            ? isEspanishLanguage
              ? "Ver menos"
              : "Show less"
            : isEspanishLanguage
            ? "Ver más"
            : "Show more"}
        </button>
      )}
    </div>
  );
};

export default ExperienceSection;
