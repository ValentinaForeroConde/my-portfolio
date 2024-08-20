import React from "react";
import clsx from "clsx";
import ProjectCard from "components/ProjectCard/ProjectCard";

import styles from "./ProjectSection.module.scss";

interface ProjectSection {
  projects: {
    title: string;
    description: string;
    images: string[];
    leftPosition?: boolean;
    tags?: string[];
  }[];
  isLightMode?: boolean;
}
const ProjectsSection: React.FC<ProjectSection> = ({
  projects,
  isLightMode,
}) => {
  return (
    <section
      className={clsx(styles.section, isLightMode && styles.sectionLight)}
    >
      <div className={styles.projectSection}>
        {projects.map((project, index) => (
          <ProjectCard
            key={index}
            title={project.title}
            description={project.description}
            images={project.images}
            leftPosition={project.leftPosition}
            tags={project.tags}
            isLightMode={isLightMode}
          />
        ))}
      </div>
    </section>
  );
};

export default ProjectsSection;
