import Head from "next/head";
import clsx from "clsx";
import Header from "@components/Header/Header";
import PersonalInfo from "@components/PersonalInfo/PersonalInfo";
import ExperienceSection from "@components/ExperienceSection/ExperienceSection";
import ProjectsSection from "@components/ProjectSection/ProjectSection";
import SocialMedia from "@components/SocialMedia/SocialMedia";
import Seo from "@utils/seo";
import { getProjects } from "@utils/Projectsinfo";
import { getExperience } from "@utils/ExperienceInfo";
import { useStore } from "@hooks/useStore";

import styles from "../styles/Home.module.scss";

export default function Home() {
  const theme = useStore((state) => state.theme);
  const language = useStore((state) => state.language);
  const isLightMode = theme === "light";
  const isEspanishLanguage = language === "ES";
  const experience = getExperience(isEspanishLanguage);
  const projects = getProjects(isEspanishLanguage);

  return (
    <div>
      <Head>
        <Seo
          isEspanishLanguage={isEspanishLanguage}
          isLightMode={isLightMode}
        />
      </Head>

      <div
        className={clsx(styles.container, isLightMode && styles.containerLight)}
      >
        <Header theme={theme} isEspanishLanguage={isEspanishLanguage} />
        <PersonalInfo theme={theme} isEspanishLanguage={isEspanishLanguage} />
        <h1
          className={clsx(
            styles.sectionTitle,
            isLightMode && styles.sectionTitleLight
          )}
        >
          {isEspanishLanguage ? "EXPERIENCIA" : "EXPERIENCE"}
        </h1>
        <ExperienceSection
          workExperience={experience}
          isLightMode={isLightMode}
        />
        <h1
          className={clsx(
            styles.sectionTitle,
            isLightMode && styles.sectionTitleLight
          )}
        >
          {isEspanishLanguage ? "PROYECTOS" : "PROJECTS"}
        </h1>
        <ProjectsSection projects={projects} isLightMode={isLightMode} />
        <SocialMedia isLightMode={isLightMode} />
      </div>
    </div>
  );
}
