import React from "react";
import clsx from "clsx";
import Carousel from "@components/Carousel/Carousel";
import { useBreakpoint } from "@hooks/useBreakpoint";

import styles from "./ProjectCard.module.scss";

interface ProjectCardProps {
  title: string;
  description: string;
  images: string[];
  leftPosition?: boolean;
  tags?: string[];
  isLightMode?: boolean;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  description,
  images,
  tags,
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
        <div
          className={clsx(
            styles.description,
            isLightMode && styles.descriptionLight
          )}
        >
          {description}
        </div>
        <div className={clsx(styles.tags, isLightMode && styles.lightTags)}>
          {tags?.map((tag) => (
            <div className={styles.tag}>{tag}</div>
          ))}
        </div>
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
