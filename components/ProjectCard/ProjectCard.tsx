import React from "react";
import clsx from "clsx";

import styles from "./ProjectCard.module.scss";

interface ProjectCardProps {
  title: string;
  description: string;
  imageSrc: string;
  leftPosition?: boolean;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  description,
  imageSrc,
  leftPosition = false,
}) => {
  return (
    <div className={clsx(styles.card)}>
      {leftPosition && (
        <div className={styles.imageContainer}>
          <img
            src={imageSrc}
            alt={`${title} screenshot`}
            className={styles.image}
          />
        </div>
      )}
      <div className={clsx(styles.content, leftPosition && styles.left)}>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.description}>{description}</p>
      </div>
      {!leftPosition && (
        <div className={styles.imageContainer}>
          <img
            src={imageSrc}
            alt={`${title} screenshot`}
            className={styles.image}
          />
        </div>
      )}
    </div>
  );
};

export default ProjectCard;
