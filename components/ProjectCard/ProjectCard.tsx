import React from "react";
import clsx from "clsx";
import Carousel from "components/Carousel/Carousel";

import styles from "./ProjectCard.module.scss";
import { useBreakpoint } from "@hooks/useBreakpoint";

interface ProjectCardProps {
  title: string;
  description: string;
  images: string[];
  leftPosition?: boolean;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  description,
  images,
  leftPosition = false,
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
      <div className={clsx(styles.content, leftPosition && styles.left)}>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.description}>{description}</p>
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
