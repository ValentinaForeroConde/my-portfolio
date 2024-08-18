import Head from "next/head";
import { PersonalInfo } from "components/PersonalInfo/PersonalInfo";
import ExperienceSection from "components/ExperienceSection/ExperienceSection";

import styles from "../styles/Home.module.scss";
import ProjectsSection from "components/ProjectSection/ProjectSection";

export default function Home() {
  const projects = [
    {
      title: "Marketing Site Project",
      description: "A web app for visualizing personalized Spotify data...",
      images: [
        "/projectImages/mkting_example.png",
        "/projectImages/mkting_example5.png",
        "/projectImages/mkting_example2.png",
        "/projectImages/mkting_example3.png",
        "/projectImages/mkting_example4.png",
      ],
      leftPosition: true,
    },
    {
      title: "Dashboard Project",
      description: "A different web application for managing tasks...",
      images: [
        "/projectImages/dash_example.png",
        "/projectImages/dash_example2.png",
        "/projectImages/dash_example3.png",
      ],
    },
    {
      title: "Strapi Project",
      description: "A different web application for managing tasks...",
      images: ["/projectImages/strapi.png"],
      leftPosition: true,
    },
    {
      title: "Internal Tools Project",
      description: "A different web application for managing tasks...",
      images: [
        "/projectImages/cockpit_example.png",
        "/projectImages/cockpit_example2.png",
      ],
    },
  ];

  const experience = [
    {
      title: "Software Developer",
      company: "AllTheRooms",
      location: "Remote",
      duration: "Nov 2021 - Present",
      description: (
        <div>
          <ul>
            <li>
              Building and maintaining web applications and the marketing site
              using React, Next.js, and TypeScript.
            </li>
            <li>
              Enhancing UX and UI by implementing modern, responsive design
              principles with CSS, SaaS, and Material UI.
            </li>
            <li>
              Integrating Strapi CMS into the marketing site and internal
              applications, streamlining content management processes.
            </li>
            <li>
              Improving SEO by using tools like Google Analytics, Lighthouse and
              more, to analyze page performance, optimize site speed, and
              implement best practices, leading to increased visibility and
              organic traffic.
            </li>
            <li>
              Collaborating closely with design teams to translate design
              concepts into functional frontend components.
            </li>
            <li>
              Using GraphQL for backend operations and efficiently consuming
              endpoints to enhance product features and functionalities.
            </li>
            <li>
              Working on multiple projects with a great team to improve the
              overall functionality of the products.
            </li>
          </ul>
        </div>
      ),
      technologies: [
        "React",
        "Next.js",
        "JavaScript",
        "TypeScript",
        "MaterialUI",
        "CSS",
        "HTML",
        "SaaS",
        "Tailwind",
        "Git - GitHub",
        "Node.js",
      ],
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
        <ExperienceSection workExperience={experience} />
        <h1 className={styles.sectionTitle}>PROYECTS</h1>
        <ProjectsSection projects={projects} />
      </div>
    </div>
  );
}
