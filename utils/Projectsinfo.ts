export const getProjects = (isEspanishLanguage: boolean) => {
  return [
    {
      title: isEspanishLanguage ? "Sitio de Marketing" : "Marketing Site",
      description: isEspanishLanguage
        ? `Contribuí a la creación, actualización y mantenimiento de un sitio de marketing de alto rendimiento. 
           Este proyecto se centró en mejorar la participación del usuario, mejorar la optimización de motores de búsqueda (SEO) 
           y garantizar una gestión de contenido fluida a través de un CMS personalizado creado con Strapi.`
        : `I contributed to the creation, update, and maintenance of a high-performance marketing site. 
           This project was focused on improving user engagement, enhancing search engine optimization (SEO), 
           and ensuring seamless content management through a custom CMS built with Strapi.`,
      images: [
        "/projectImages/mkting_example.png",
        "/projectImages/mkting_example5.png",
        "/projectImages/mkting_example2.png",
        "/projectImages/mkting_example3.png",
        "/projectImages/mkting_example4.png",
        "/projectImages/mkting_example5.png",
      ],
      leftPosition: true,
      tags: [
        "#React",
        "#Next.js",
        "#Typescript",
        "#Scss",
        "#Storybook",
        "#CSS",
        "#HTML",
        "#CustomUILib",
      ],
    },
    {
      title: isEspanishLanguage ? "Aplicación Web" : "Dashboard WebApp",
      description: isEspanishLanguage
        ? `Desempeñé un papel clave en el desarrollo y mantenimiento continuo de una potente aplicación de panel de control 
           diseñada para ayudar a los usuarios a analizar datos de alquiler a corto plazo. 
           El panel proporciona un conjunto completo de herramientas diseñadas para inversores, anfitriones y empresas 
           para mejorar sus estrategias de alquiler a corto plazo y maximizar los ingresos.`
        : `I played a key role in the development and ongoing maintenance of a powerful dashboard application 
           designed to help users analyze short-term rental data. The dashboard provides a comprehensive suite of tools 
           tailored for investors, hosts, and enterprises to enhance their short-term rental strategies and maximize revenue.`,
      images: [
        "/projectImages/dash_example.png",
        "/projectImages/dash_example2.png",
        "/projectImages/dash_example3.png",
      ],
      tags: [
        "#React",
        "#Next.js",
        "#Typescript",
        "#GraphQL",
        "#Scss",
        "#CustomUILib",
      ],
    },
    {
      title: isEspanishLanguage ? "Strapi CMS" : "Strapi CMS",
      description: isEspanishLanguage
        ? `Dirigí el desarrollo de un sistema de gestión de contenido personalizado (CMS) utilizando Strapi, 
           diseñado desde cero para capacitar a los miembros del equipo no técnicos a gestionar y actualizar contenido en el sitio de marketing. 
           Este proyecto se centró en crear una plataforma intuitiva y flexible que optimizara los procesos de creación y gestión de contenido.`
        : `I spearheaded the development of a custom content management system (CMS) using Strapi, designed from the ground up 
           to empower non-technical team members to manage and update content on the marketing site. 
           This project focused on creating an intuitive and flexible platform that streamlined content creation and management processes.`,
      images: ["/projectImages/strapi.png", "/projectImages/strapi2.png"],
      leftPosition: true,
      tags: ["#Next.js", "#Typescript", "#GraphQL", "#Strapi"],
    },
    {
      title: isEspanishLanguage ? "Herramientas Internas" : "Internal Tools",
      description: isEspanishLanguage
        ? `Lideré el desarrollo de un conjunto de herramientas internas diseñadas para optimizar y mejorar 
           diversas tareas administrativas y operativas dentro de la empresa. Estas herramientas permiten a los equipos internos 
           monitorear la actividad de los usuarios, gestionar pedidos, verificar la información de los usuarios y generar informes, 
           todo mientras se mantiene un alto nivel de seguridad y eficiencia.`
        : `I led the development of a suite of internal tools designed to streamline and enhance various administrative and operational tasks within the company. 
           These tools empower internal teams to monitor user activity, manage orders, verify user information, and generate reports, 
           all while maintaining a high level of security and efficiency.`,
      images: [
        "/projectImages/cockpit_example.png",
        "/projectImages/cockpit_example2.png",
        "/projectImages/cockpit_example3.png",
      ],
      tags: [
        "#React",
        "#Next.js",
        "#Typescript",
        "#GraphQL",
        "#Tailwind",
        "MaterialUI",
        "#Formik-YUP",
      ],
    },
    {
      title: isEspanishLanguage ? "Aplicación Pokémon" : "Pokémon App",
      description: isEspanishLanguage
        ? `El proyecto de la API de Pokémon fue una iniciativa personal destinada a mejorar mis habilidades en el consumo de API y desarrollo frontend. 
           El proyecto consistió en consumir datos de una API pública de Pokémon para crear una aplicación web interactiva 
           que permitiera a los usuarios explorar y aprender más sobre varios Pokémon.`
        : `The Pokémon API project was a personal initiative aimed at improving my skills in API consumption and front-end development. 
           The project involved consuming data from a public Pokémon API to create an interactive web application that allowed users 
           to explore and learn more about various Pokémon.`,
      images: [
        "/projectImages/pokemon.png",
        "/projectImages/pokemon3.png",
        "/projectImages/pokemon2.png",
        "/projectImages/pokemon4.png",
      ],
      leftPosition: true,
      tags: [
        "#React",
        "#Next.js",
        "#PostCSS",
        "#Tailwind",
        "#Axios",
        "#NextUI",
      ],
    },
    {
      title: isEspanishLanguage ? "Aplicación ProTic" : "ProTic App",
      description: isEspanishLanguage
        ? `Fue una aplicación integral desarrollada durante el curso MisionTIC. Incluía módulos clave para la gestión de ventas, productos y usuarios, 
           proporcionando una solución totalmente integrada para pequeñas y medianas empresas para optimizar sus operaciones.`
        : `It was a comprehensive application developed during the MisionTIC course. It included key modules for managing sales, products, and users, 
           providing a fully integrated solution for small to medium-sized businesses to streamline their operations.`,
      images: ["/projectImages/proTic.png"],
      tags: ["#Javascript", "#HTML", "#CSS", "#Tailwind"],
    },
  ];
};
