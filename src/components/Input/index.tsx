import { FormLabel, Input } from "@chakra-ui/react";
import { ReactElement } from "react";
import { InputProps } from "./types";

const UMDInput = ({
  label,
  type,
  value,
  placeholder,
  onChange,
}: InputProps): ReactElement => {
  return (
    <>
      {label && <FormLabel>{label}</FormLabel>}

      <Input
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
      />
    </>
  );
};

export default UMDInput;
