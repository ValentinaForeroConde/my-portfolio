import Head from "next/head";
import { PersonalInfo } from "components/PersonalInfo/PersonalInfo";
import ExperienceSection from "components/ExperienceSection/ExperienceSection";

import styles from "../styles/Home.module.scss";
import ProjectsSection from "components/ProjectSection/ProjectSection";

export default function Home() {
  const projects = [
    {
      title: "Example Project",
      description: "A web app for visualizing personalized Spotify data...",
      imageSrc: "/ATRmktng.png",
      leftPosition: true,
    },
    {
      title: "Another Project",
      description: "A different web application for managing tasks...",
      imageSrc: "/ATRmktng.png",
    },
  ];

  return (
    <div>
      <Head>
        <title>Valentina's Portfolio</title>
        <link rel="icon" href="/pic.png" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
          rel="stylesheet"
        />
      </Head>

      <div className={styles.container}>
        <PersonalInfo />
        <h1 className={styles.sectionTitle}>EXPERIENCE</h1>

        <ExperienceSection
          title="Software Developer"
          company="AllTheRooms"
          location="Remote"
          duration="Nov 2021 - Present"
          description="Currently, I am working on WebHR Mobile Application, WebHR is a Cloud based Social HR Software for SMEs by Verge Systems Inc. WebHR is currently used in over 160 countries world wide by thousands of organizations to manage HR. As a React.js developer with 1.5 years of experience, I have a strong foundation in creating dynamic and responsive mobile and web applications."
          technologies={["React Native", "React", "JavaScript", "TypeScript"]}
        />

        <h1 className={styles.sectionTitle}>PROYECTS</h1>

        <ProjectsSection projects={projects} />
      </div>
    </div>
  );
}
