import { useState, useEffect } from "react";
import { useWindowSize } from "./useWindowSize";

type ViewPort = "mobile" | "tablet" | "desktop";

const BREAKPOINT_TABLET = 700;
const BREAKPOINT_DESKTOP = 1280;

export const useBreakpoint = () => {
  const [viewport, setViewPort] = useState<ViewPort>();
  const { width } = useWindowSize();

  useEffect(() => {
    if (width) {
      if (width < BREAKPOINT_TABLET) {
        setViewPort("mobile");
      } else if (width < BREAKPOINT_DESKTOP) {
        setViewPort("tablet");
      } else {
        setViewPort("desktop");
      }
    }
  }, [width]);

  return viewport;
};
