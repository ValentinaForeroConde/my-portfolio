import React from "react";
import ProjectCard from "components/ProjectCard/ProjectCard";

import styles from "./ProjectSection.module.scss";

interface ProjectSection {
  projects: {
    title: string;
    description: string;
    imageSrc: string;
    leftPosition?: boolean;
  }[];
}
const ProjectsSection: React.FC<ProjectSection> = ({ projects }) => {
  return (
    <section className={styles.section}>
      <div className={styles.projectGrid}>
        {projects.map((project, index) => (
          <ProjectCard
            key={index}
            title={project.title}
            description={project.description}
            imageSrc={project.imageSrc}
            leftPosition={project.leftPosition}
          />
        ))}
      </div>
    </section>
  );
};

export default ProjectsSection;
