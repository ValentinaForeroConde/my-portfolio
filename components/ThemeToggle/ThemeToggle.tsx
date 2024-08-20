import React from "react";
import { useStore } from "@hooks/useStore";

import styles from "./ThemeToggle.module.scss";

const ThemeToggle: React.FC = () => {
  const theme = useStore((state) => state.theme);
  const setTheme = useStore((state) => state.setTheme);
  const isDarkMode = theme === "dark" ? true : false;
  const currentTheme = isDarkMode ? "light" : "dark";

  const toggleTheme = () => {
    setTheme(currentTheme);
  };

  return (
    <div className={styles.toggleWrapper} onClick={toggleTheme}>
      <div
        className={`${styles.toggle} ${
          isDarkMode ? styles.dark : styles.light
        }`}
      >
        <div className={styles.icon}>
          {isDarkMode ? (
            <svg
              className={styles.moonIcon}
              viewBox="0 0 28.219 28.219"
              xmlns="http://www.w3.org/2000/svg"
              fill="#fff"
            >
              <g>
                <g>
                  <path
                    d="M18.08,13.773c-2.167-3.753-2.012-8.2,0.005-11.703c-1.992-0.003-4.011,0.491-5.861,1.56
                    C8.238,5.933,6.13,10.221,6.402,14.523c0.945,0.031,1.839,0.367,2.559,0.969c0.681-0.379,1.435-0.574,2.221-0.574
                    c2.093,0,3.903,1.409,4.468,3.379c1.476,0.455,2.517,1.813,2.517,3.414c0,1.672-1.157,3.07-2.71,3.467
                    c2.785,0.641,5.809,0.281,8.48-1.26c1.85-1.068,3.287-2.569,4.281-4.297C24.176,19.614,20.247,17.525,18.08,13.773z"
                  />
                  <path
                    d="M17.186,21.709c0-1.357-1.041-2.459-2.364-2.582c-0.229-1.818-1.762-3.229-3.64-3.229c-0.898,0-1.708,0.331-2.348,0.862
                    c-0.601-0.768-1.526-1.271-2.576-1.271c-1.569,0-2.875,1.101-3.202,2.57C1.35,18.178,0,19.584,0,21.321
                    c0,1.812,1.47,3.281,3.283,3.281c0.385,0,0.751-0.078,1.094-0.2c0.598,0.82,1.559,1.359,2.651,1.359
                    c0.668,0,1.288-0.202,1.807-0.545c0.592,0.574,1.396,0.932,2.287,0.932c1.311,0,2.433-0.775,2.959-1.887
                    c0.161,0.031,0.326,0.052,0.497,0.052C16.018,24.314,17.186,23.147,17.186,21.709z"
                  />
                </g>
              </g>
            </svg>
          ) : (
            <svg
              className={styles.sunIcon}
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M10.5 1.5V3.1M3.6 10H2M5.4512 4.95137L4.31982 3.82M15.5498 4.95137L16.6812 3.82M19 10H17.4M6.50007 10.0001C6.50007 7.79093 8.29093 6.00007 10.5001 6.00007C12.0061 6.00007 13.3177 6.83235 14.0001 8.06206M6 22C3.79086 22 2 20.2091 2 18C2 15.7909 3.79086 14 6 14C6.46419 14 6.90991 14.0791 7.32442 14.2245C8.04061 12.3396 9.86387 11 12 11C14.1361 11 15.9594 12.3396 16.6756 14.2245C17.0901 14.0791 17.5358 14 18 14C20.2091 14 22 15.7909 22 18C22 20.2091 20.2091 22 18 22C13.3597 22 9.87921 22 6 22Z"
                stroke="#000000"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          )}
        </div>
      </div>
    </div>
  );
};

export default ThemeToggle;
