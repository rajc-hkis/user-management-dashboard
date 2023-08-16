import { ReactElement } from "react";
import { Button } from "@chakra-ui/react";
import { ButtonProps } from "./types";

const UMDButton = ({
  type = "button",
  colorScheme = "teal",
  size = "md",
  text,
  icon,
  onClick,
  style,
}: ButtonProps): ReactElement => {
  return (
    <>
      <Button
        type={type}
        colorScheme={colorScheme}
        size={size}
        onClick={onClick}
        style={style}
      >
        {icon && icon}
        {text && text}
      </Button>
    </>
  );
};

export default UMDButton;
