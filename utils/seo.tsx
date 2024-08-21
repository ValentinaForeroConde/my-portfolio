import React from "react";

interface SeoProps {
  isEspanishLanguage: boolean;
  isLightMode: boolean;
}

const Seo: React.FC<SeoProps> = ({ isEspanishLanguage, isLightMode }) => {
  return (
    <>
      <title>
        {isEspanishLanguage
          ? "Valentina - Portafolio Desarrolladora de Software"
          : "Valentina - Software Developer Portfolio"}
      </title>
      <meta
        name="description"
        content={
          isEspanishLanguage
            ? `Bienvenido a mi portafolio de servicios, soy una desarrolladora de software 
              establecida en Medellín-Colombia, especializado en React, Next.js y desarrollo frontend. 
              Explora mis proyectos y experiencias en la creación de interfaces de usuario 
              intuitivas y receptivas.`
            : `Welcome to my portfolio of services, I'm a software developer based 
              in Medellín-Colombia, specializing in React, Next.js, and front-end 
              development. Explore my projects and experiences in crafting intuitive
              and responsive user interfaces.`
        }
      />
      <meta
        name="keywords"
        content={
          isEspanishLanguage
            ? "desarrollador de software, portafolio, desarrollador de React, Next.js, desarrollo frontend, UI/UX, Medellín, Colombia"
            : "software developer, portfolio, React developer, Next.js, front-end development, UI/UX, Medellín, Colombia"
        }
      />
      <meta name="author" content="Valentina Forero" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="robots" content="index, follow" />
      <meta
        property="og:title"
        content={
          isEspanishLanguage
            ? "Valentina - Portafolio Desarrolladora de Software"
            : "Valentina - Software Developer Portfolio"
        }
      />
      <meta
        property="og:description"
        content={
          isEspanishLanguage
            ? "Explora el portafolio de Valentina, una desarrollador de software enfocado en React, Next.js, y la creación de interfaces de usuario intuitivas."
            : "Explore the portfolio of Valentina Forero, a software developer focused on React, Next.js, and creating intuitive user interfaces."
        }
      />
      <meta property="og:url" content="https://www.valeforero.com" />
      <meta property="og:type" content="website" />
      <meta
        property="og:site_name"
        content={
          isEspanishLanguage
            ? "Portafolio de Valentina Forero"
            : `Valentina's Forero Portfolio`
        }
      />
      <meta name="twitter:card" content="summary_large_image" />
      <meta
        name="twitter:title"
        content={
          isEspanishLanguage
            ? "Valentina Forero - Portafolio Desarrolladora de software"
            : "Valentina Forero - Software Developer Portfolio"
        }
      />
      <meta
        name="twitter:description"
        content={
          isEspanishLanguage
            ? "Explora el portafolio de Valentina, una desarrollador de software enfocado en React, Next.js, y la creación de interfaces de usuario intuitivas."
            : "Explore the portfolio of Valentina, a software developer focused on React, Next.js, and creating intuitive user interfaces."
        }
      />
      <meta name="twitter:site" content="@valefoCode" />
      <script type="application/ld+json">
        {`
        {
          "@context": "https://schema.org",
          "@type": "Person",
          "name": "Valentina Forero",
          "jobTitle": "Software Developer",
          "url": "https://www.valeforero.com",
          "sameAs": [
            "https://www.linkedin.com/in/valentina-forero-conde-911936203/",
            "https://github.com/ValentinaForeroConde",
            "https://twitter.com/valefoCode"
          ],
          "worksFor": {
            "@type": "Organization",
            "name": "Valentina Forero"
          },
          "address": {
            "@type": "PostalAddress",
            "addressLocality": "Medellín",
            "addressRegion": "Antioquia",
            "addressCountry": "Colombia"
          }
        }
        `}
      </script>
      <link rel="icon" href={isLightMode ? "sunglasses.png" : "emoji.png"} />
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" />
      <link
        href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
        rel="stylesheet"
      />
    </>
  );
};

export default Seo;
