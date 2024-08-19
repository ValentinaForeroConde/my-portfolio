import Head from "next/head";
import Header from "@components/Header/Header";
import PersonalInfo from "components/PersonalInfo/PersonalInfo";
import ExperienceSection from "components/ExperienceSection/ExperienceSection";
import ProjectsSection from "components/ProjectSection/ProjectSection";
import SocialMedia from "components/SocialMedia/SocialMedia";
import { projects } from "utils/Projectsinfo";
import { experience } from "utils/ExperienceInfo";

import styles from "../styles/Home.module.scss";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Valentina's Portfolio</title>
        <link rel="icon" href="/emoji.png" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
          rel="stylesheet"
        />
      </Head>

      <div className={styles.container}>
        <Header />
        <PersonalInfo />
        <h1 className={styles.sectionTitle}>EXPERIENCE</h1>
        <ExperienceSection workExperience={experience} />
        <h1 className={styles.sectionTitle}>PROJECTS</h1>
        <ProjectsSection projects={projects} />
        <SocialMedia />
      </div>
    </div>
  );
}
