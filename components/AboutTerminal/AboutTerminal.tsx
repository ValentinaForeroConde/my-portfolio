import { useState } from "react";
import clsx from "clsx";

import styles from "./AboutTerminal.module.scss";

type AboutTerminalProps = {
  isLightMode: boolean;
  isEspanishLanguage: boolean;
};

type TerminalBlock = {
  command: string;
  output: string[];
};

type TerminalTheme = "dracula" | "nord" | "oneDark";

const THEMES: { id: TerminalTheme; name: string }[] = [
  { id: "dracula", name: "Dracula" },
  { id: "nord", name: "Nord" },
  { id: "oneDark", name: "One Dark" },
];

export default function AboutTerminal({
  isLightMode,
  isEspanishLanguage,
}: AboutTerminalProps) {
  const [theme, setTheme] = useState<TerminalTheme>("dracula");
  const [menuOpen, setMenuOpen] = useState(false);
  const blocks: TerminalBlock[] = isEspanishLanguage
    ? [
        {
          command: "quiénsoy",
          output: [
            "Soy Valentina Forero, Ingeniera Frontend basada en Medellín, Colombia.",
            "con 4 años de experiencia profesional construyendo aplicaciones web.",
            "",
            "Me especializo en React, Next.js y TypeScript, enfocándome en crear interfaces escalables, mantenibles y fáciles de usar, con especial atención a los detalles de UI/UX, performance y accesibilidad.",
            "Disfruto colaborar de cerca con equipos de diseño y producto para convertir requerimientos complejos en experiencias digitales intuitivas y confiables.",
            "",
            "Me encanta viajar, conocer nuevas culturas y descubrir lugares maravillosos. Estas experiencias inspiran mi creatividad, empatía y forma de resolver problemas.",
            "",
          ],
        },
        {
          command: "habilidades",
          output: [
            "React, Next.js, TypeScript",
            "UI Systems, Performance, SEO, Accesibilidad",
            "GraphQL, Strapi, Testing (Jest/Playwright)",
            "",
          ],
        },
        {
          command: "valores",
          output: [
            "Código limpio y mantenible",
            "Atención al detalle (UI polish)",
            "Colaboración y comunicación",
            "Aprendizaje continuo",
          ],
        },
      ]
    : [
        {
          command: "whoami",
          output: [
            "I’m Valentina Forero, a Frontend Engineer based in Medellín, Colombia.",
            "",
            "with 4 years of professional experience building web applications.",

            "I specialize in React, Next.js, and TypeScript, focusing on creating scalable, maintainable, and user-friendly interfaces, with strong attention to UI/UX details, performance, and accessibility.",

            "I enjoy collaborating closely with design and product teams to turn complex requirements into intuitive and reliable digital experiences.",
            "",
            "I love traveling, discovering new cultures, and exploring beautiful places around the world. These experiences inspire my creativity, empathy, and the way I approach problem-solving.",
            "",
          ],
        },
        {
          command: "skills",
          output: [
            "React, Next.js, TypeScript",
            "UI Systems, Performance, SEO, Accessibility",
            "GraphQL, Strapi, Testing (Jest/Playwright)",
            "",
          ],
        },
        {
          command: "values",
          output: [
            "Clean, maintainable code",
            "Attention to detail (UI polish)",
            "Collaboration & communication",
            "Continuous learning",
          ],
        },
      ];

  const themeClass = {
    dracula: styles.themeDracula,
    nord: styles.themeNord,
    oneDark: styles.themeOneDark,
  }[theme];

  return (
    <section className={clsx(isLightMode && styles.sectionLight)}>
      <div
        className={clsx(
          styles.terminal,
          themeClass,
          isLightMode && styles.terminalLight
        )}
        role="group"
        aria-label={
          isEspanishLanguage ? "Sección tipo terminal" : "Terminal section"
        }
      >
        {/* Top bar */}
        <div className={styles.topBar} aria-hidden="true">
          <span className={clsx(styles.dot, styles.red)} />
          <span className={clsx(styles.dot, styles.yellow)} />
          <span className={clsx(styles.dot, styles.green)} />
          <span className={styles.topBarTitle}>
            {isEspanishLanguage ? "terminal — perfil" : "terminal — profile"}
          </span>

          {/* Settings */}
          <div className={styles.settingsWrapper}>
            <button
              className={styles.settingsBtn}
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label={isEspanishLanguage ? "Cambiar tema" : "Change theme"}
            >
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <circle cx="12" cy="12" r="3" />
                <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z" />
              </svg>
            </button>

            {menuOpen && (
              <div className={styles.themeMenu}>
                {THEMES.map((t) => (
                  <button
                    key={t.id}
                    className={clsx(
                      styles.themeOption,
                      theme === t.id && styles.themeOptionActive
                    )}
                    onClick={() => {
                      setTheme(t.id);
                      setMenuOpen(false);
                    }}
                  >
                    <span
                      className={clsx(
                        styles.themePreview,
                        styles[`preview${t.id}`]
                      )}
                    />
                    {t.name}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Body */}
        <div className={styles.body}>
          {blocks.map((block) => (
            <div key={block.command} className={styles.block}>
              <div className={styles.commandRow}>
                <span className={styles.prompt} aria-hidden="true">
                  {"$"}
                </span>
                <span className={styles.command}>{block.command}</span>
              </div>

              <div className={styles.output}>
                {block.output.map((line, idx) => (
                  <p key={`${block.command}-${idx}`} className={styles.line}>
                    {line || "\u00A0"}
                  </p>
                ))}
              </div>
            </div>
          ))}

          <div className={styles.commandRow} aria-hidden="true">
            <span className={styles.prompt}>$</span>
            <span className={styles.cursor} />
          </div>
        </div>
      </div>
    </section>
  );
}
