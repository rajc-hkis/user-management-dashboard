import { ReactElement, CSSProperties } from "react";

export interface ButtonProps {
  type?: "button" | "submit" | "reset";
  colorScheme?: string;
  size?: string;
  text?: string;
  icon?: ReactElement;
  onClick?: () => void;
  style?: CSSProperties;
}
