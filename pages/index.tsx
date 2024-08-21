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
    <div lang={isEspanishLanguage ? "es" : "en"}>
      <Head>
        <title>
          {isEspanishLanguage
            ? "Valentina - Portafolio Desarrolladora de Software"
            : "Valentina - Software Developer Portfolio"}
        </title>
        <link rel="icon" href={isLightMode ? "sunglasses.png" : "emoji.png"} />
        <Seo isEspanishLanguage={isEspanishLanguage} />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
          rel="stylesheet"
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
