import React from "react";
import clsx from "clsx";

import styles from "./DownloadLink.module.scss";

interface DownloadLink {
  theme?: string;
  isEspanishLanguage?: boolean;
}

const DownloadLink: React.FC<DownloadLink> = ({
  theme,
  isEspanishLanguage,
}) => {
  const isLightMode = theme === "light";

  return (
    <div className={clsx(styles.download, isLightMode && styles.downloadLight)}>
      <a
        href="https://drive.google.com/file/d/1-7e7vBngGh0jDb1VCcGvMY7OMIWc2znp/view"
        target="_blank"
      >
        {isEspanishLanguage ? "Descargar mi CV" : "Download my CV"}
      </a>
      <svg
        className={clsx(styles.svg, isLightMode && styles.svgLight)}
        viewBox="0 0 32 32"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M0 16q0 2.912 1.824 5.088t4.576 2.752q0.032 0 0.032-0.032v-0.064t0.032-0.032q0.544-1.344 1.344-2.176t2.208-1.184v-2.336q0-2.496 1.728-4.256t4.256-1.76 4.256 1.76 1.76 4.256v2.336q1.376 0.384 2.176 1.216t1.344 2.144l0.096 0.288h0.384q2.464 0 4.224-1.76t1.76-4.224v-2.016q0-2.464-1.76-4.224t-4.224-1.76q-0.096 0-0.32 0.032 0.32-1.152 0.32-2.048 0-3.296-2.368-5.632t-5.632-2.368q-2.88 0-5.056 1.824t-2.784 4.544q-1.152-0.352-2.176-0.352-3.296 0-5.664 2.336t-2.336 5.664v1.984zM10.016 25.824q-0.096 0.928 0.576 1.6l4 4q0.576 0.576 1.408 0.576t1.408-0.576l4-4q0.672-0.672 0.608-1.6-0.064-0.32-0.16-0.576-0.224-0.576-0.736-0.896t-1.12-0.352h-1.984v-5.984q0-0.832-0.608-1.408t-1.408-0.608-1.408 0.608-0.576 1.408v5.984h-2.016q-0.608 0-1.12 0.352t-0.736 0.896q-0.096 0.288-0.128 0.576z"></path>
      </svg>
    </div>
  );
};

export default DownloadLink;
