import React from "react";
import clsx from "clsx";
import Carousel from "components/Carousel/Carousel";
import { useBreakpoint } from "@hooks/useBreakpoint";

import styles from "./ProjectCard.module.scss";

interface ProjectCardProps {
  title: string;
  description: string;
  images: string[];
  leftPosition?: boolean;
  isLightMode?: boolean;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  description,
  images,
  leftPosition = false,
  isLightMode,
}) => {
  const breakpoint = useBreakpoint();
  const isDesktop = breakpoint === "desktop";

  return (
    <div className={clsx(styles.card)}>
      {(leftPosition || !isDesktop) && (
        <div className={styles.imageContainer}>
          <Carousel images={images} />
        </div>
      )}
      <div
        className={clsx(
          styles.content,
          leftPosition && styles.left,
          isLightMode && styles.contentLight
        )}
      >
        <h3 className={clsx(styles.title, isLightMode && styles.titleLight)}>
          {title}
        </h3>
        <p
          className={clsx(
            styles.description,
            isLightMode && styles.descriptionLight
          )}
        >
          {description}
        </p>
      </div>
      {!leftPosition && (
        <div className={styles.imageContainerRight}>
          <Carousel images={images} />
        </div>
      )}
    </div>
  );
};

export default ProjectCard;
