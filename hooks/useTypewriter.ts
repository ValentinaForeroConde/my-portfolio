import { useState, useEffect } from "react";

export const useTypewriter = (text: string, speed = 50) => {
  const [displayText, setDisplayText] = useState("");

  useEffect(() => {
    let i = 0;
    const typingInterval = setInterval(() => {
      setDisplayText((prevText) => {
        const newText = text.substring(0, i + 1);
        if (i < text.length - 1) {
          i++;
        } else {
          clearInterval(typingInterval);
        }
        return newText;
      });
    }, speed);

    return () => {
      clearInterval(typingInterval);
    };
  }, [text, speed]);

  return displayText;
};
