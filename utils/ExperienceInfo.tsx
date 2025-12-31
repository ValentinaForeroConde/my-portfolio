export const getExperience = (isEspanishLanguage: boolean) => {
  return [
    {
      title: isEspanishLanguage ? "Ingeniera Frontend" : "Frontend Engineer",
      company: "Deckard Technologies",
      location: isEspanishLanguage ? "Híbrido" : "Hybrid",
      duration: isEspanishLanguage
        ? "Feb 2025 - Presente"
        : "Feb 2025 - Present",
      description: (
        <div>
          <ul>
            {isEspanishLanguage ? (
              <>
                <li>Desarrollo y mantenimiento de sistemas de registro.</li>
                <li>
                  Colaboración estrecha con los equipos de diseño para mejorar
                  la UX y UI de los sistemas de registro.
                </li>
                <li>
                  Implementación de interfaces responsivas, accesibles y
                  mantenibles para deliver smooth and intuitive user
                  experiences.
                </li>
                <li>
                  Contribuir en múltiples iniciativas, aprendiendo
                  continuamente, creciendo y mejorando la calidad del frontend y
                  la experiencia del usuario.
                </li>
              </>
            ) : (
              <>
                <li>Build and maintain registration systems.</li>
                <li>
                  Work closely with design and product teams to improve the
                  overall look and feel of the applications, continuously
                  enhancing UX and UI quality.
                </li>
                <li>
                  Implement responsive, accessible, and maintainable interfaces
                  to deliver smooth and intuitive user experiences.
                </li>
                <li>
                  Contribute across multiple initiatives, continuously learning,
                  growing, and improving frontend quality and user experience.
                </li>
              </>
            )}
          </ul>
        </div>
      ),
      technologies: [
        {
          name: "React",
          link: "https://react.dev/",
        },
        {
          name: "JavaScript",
          link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
        },
        { name: "TypeScript", link: "https://www.typescriptlang.org/" },
        {
          name: "CSS",
          link: "https://developer.mozilla.org/en-US/docs/Web/CSS",
        },
        {
          name: "HTML",
          link: "https://developer.mozilla.org/en-US/docs/Web/HTML",
        },
        { name: "Tailwind", link: "https://tailwindcss.com/" },
        { name: "UntitledUI", link: "https://www.untitledui.com/" },
        {
          name: "Git - GitHub",
          link: "https://docs.github.com/en/get-started",
        },
        { name: "Node.js", link: "https://nodejs.org/docs/latest/api/" },
        { name: "Formik - Yup", link: "https://formik.org/" },
        { name: "Jest", link: "https://jestjs.io/" },
        { name: "Cypress", link: "https://www.cypress.io/#create" },
        { name: "Figma", link: "https://www.figma.com/" },
        { name: "Datadog", link: "https://www.datadoghq.com/" },
        { name: "AWS", link: "https://aws.amazon.com/" },
      ],
    },
    {
      title: isEspanishLanguage
        ? "Desarrolladora de Software"
        : "Software Developer",
      company: "Universidad de Los Andes",
      location: isEspanishLanguage ? "Remoto" : "Remote",
      duration: isEspanishLanguage
        ? "Oct 2024 - Ene 2025"
        : "Oct 2024 - Jan 2025",
      description: (
        <div>
          <ul>
            {isEspanishLanguage ? (
              <>
                <li>
                  Contrubuí al desarrollo frontend de una aplicación web
                  construida desde cero para la Superintendencia Financiera de
                  Colombia.
                </li>
                <li>
                  Construí componentes de UI utilizando JavaScript, Material UI
                  y Axios, consumiendo APIs REST.
                </li>
                <li>
                  Colaboré con equipos multifuncionales para entregar una
                  aplicación web lista para producción.
                </li>
              </>
            ) : (
              <>
                <li>
                  Contributed to the frontend development of a web application
                  built from scratch for the Superintendencia Financiera de
                  Colombia.
                </li>
                <li>
                  Built UI components using JavaScript, Material UI, and Axios,
                  consuming REST APIs.
                </li>
                <li>
                  Collaborated with cross-functional teams to deliver a
                  production-ready web application.
                </li>
              </>
            )}
          </ul>
        </div>
      ),
      technologies: [
        {
          name: "React",
          link: "https://react.dev/",
        },
        { name: "Next.js", link: "https://nextjs.org/" },
        {
          name: "JavaScript",
          link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
        },
        { name: "TypeScript", link: "https://www.typescriptlang.org/" },
        { name: "MaterialUI", link: "https://mui.com/" },
        {
          name: "CSS",
          link: "https://developer.mozilla.org/en-US/docs/Web/CSS",
        },
        {
          name: "HTML",
          link: "https://developer.mozilla.org/en-US/docs/Web/HTML",
        },
        { name: "Tailwind", link: "https://tailwindcss.com/" },
        {
          name: "Git - GitHub",
          link: "https://docs.github.com/en/get-started",
        },
        { name: "Ruby on Rails", link: "https://www.ruby-lang.org/en/" },
        { name: "Formik - Yup", link: "https://formik.org/" },
        { name: "PostgreSQL", link: "https://www.postgresql.org/" },
        { name: "Docker", link: "https://www.docker.com/" },
      ],
    },
    {
      title: isEspanishLanguage
        ? "Desarrolladora de Software"
        : "Software Developer",
      company: "AllTheRooms",
      location: isEspanishLanguage ? "Remoto" : "Remote",
      duration: isEspanishLanguage
        ? "Nov 2021 - Ago 2024"
        : "Nov 2021 - Aug 2024",
      description: (
        <div>
          <ul>
            {isEspanishLanguage ? (
              <>
                <li>
                  Desarrollo y mantenimiento de aplicaciones web y el sitio de
                  marketing utilizando React, Next.js y TypeScript.
                </li>
                <li>
                  Mejora de la UX y UI mediante la implementación de principios
                  de diseño moderno y receptivo con CSS, SaaS y Material UI.
                </li>
                <li>
                  Integración de Strapi CMS en el sitio de marketing y
                  aplicaciones internas, optimizando los procesos de gestión de
                  contenido.
                </li>
                <li>
                  Mejora del SEO utilizando herramientas como Google Analytics,
                  Lighthouse y más para analizar el rendimiento de la página,
                  optimizar la velocidad del sitio e implementar mejores
                  prácticas, lo que llevó a un aumento de la visibilidad y el
                  tráfico orgánico.
                </li>
                <li>
                  Colaboración estrecha con los equipos de diseño para traducir
                  conceptos de diseño en componentes funcionales de frontend.
                </li>
                <li>
                  Uso de GraphQL para operaciones de backend y consumo eficiente
                  de endpoints para mejorar las características y
                  funcionalidades del producto.
                </li>
                <li>
                  Trabajo en múltiples proyectos con un gran equipo para mejorar
                  la funcionalidad general de los productos.
                </li>
              </>
            ) : (
              <>
                <li>
                  Building and maintaining web applications and the marketing
                  site using React, Next.js, and TypeScript.
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
                  Improving SEO by using tools like Google Analytics,
                  Lighthouse, and more, to analyze page performance, optimize
                  site speed, and implement best practices, leading to increased
                  visibility and organic traffic.
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
              </>
            )}
          </ul>
        </div>
      ),
      technologies: [
        {
          name: "React",
          link: "https://react.dev/",
        },
        { name: "Next.js", link: "https://nextjs.org/" },
        {
          name: "JavaScript",
          link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
        },
        { name: "TypeScript", link: "https://www.typescriptlang.org/" },
        { name: "MaterialUI", link: "https://mui.com/" },
        {
          name: "CSS",
          link: "https://developer.mozilla.org/en-US/docs/Web/CSS",
        },
        {
          name: "HTML",
          link: "https://developer.mozilla.org/en-US/docs/Web/HTML",
        },
        { name: "Sass", link: "https://sass-lang.com/" },
        { name: "Tailwind", link: "https://tailwindcss.com/" },
        {
          name: "Git - GitHub",
          link: "https://docs.github.com/en/get-started",
        },
        { name: "Node.js", link: "https://nodejs.org/docs/latest/api/" },
        { name: "Formik - Yup", link: "https://formik.org/" },
        { name: "Strapi", link: "https://strapi.io/" },
        { name: "LogRocket", link: "https://logrocket.com/" },
        {
          name: "GA4",
          link: "https://support.google.com/analytics/",
        },
        { name: "Jest", link: "https://jestjs.io/" },
        { name: "Playwright", link: "https://playwright.dev/" },
      ],
    },
    {
      title: isEspanishLanguage ? "Pasantía" : "Internship",
      company: "Clínica de La Presentación",
      location: "Manizales, Colombia",
      duration: isEspanishLanguage
        ? "Jul 2020 - Dic 2020"
        : "Jul 2020 - Dec 2020",
      description: (
        <div>
          <ul>
            {isEspanishLanguage ? (
              <>
                <li>
                  Sistema prototipo con IoT para apoyar el servicio de UCI de la
                  clínica, para comunicar los cubículos de los pacientes con el
                  centro de enfermería (proyecto de grado).
                </li>
                <li>Área biomédica y gestión tecnológica.</li>
              </>
            ) : (
              <>
                <li>
                  Prototype system with IoT to support the ICU service of the
                  clinic to communicate the patient's cubicles with the nursing
                  center (degree project).
                </li>
                <li>Biomedical area and technology management.</li>
              </>
            )}
          </ul>
        </div>
      ),
      technologies: [
        { name: "Arduino", link: "https://docs.arduino.cc/" },
        { name: "Firebase", link: "https://firebase.google.com/" },
      ],
    },
  ];
};
