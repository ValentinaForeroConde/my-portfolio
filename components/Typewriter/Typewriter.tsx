import clsx, { ClassValue } from "clsx";
import { useTypewriter } from "hooks/useTypewriter";

type Props = {
  text: string;
  speed: number;
  className?: ClassValue;
};

export const Typewriter = ({ text, speed, className }: Props) => {
  const displayText = useTypewriter(text, speed);
  return <code className={clsx(className)}>{displayText}</code>;
};
