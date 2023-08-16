import { FormLabel, Select } from "@chakra-ui/react";
import { ReactElement } from "react";
import { USER_TYPES } from "../../utils/utils";
import { SelectProps } from "./types";

const UMDSelect = ({
  label,
  value,
  name,
  placeholder,
  onChange,
}: SelectProps): ReactElement => {
  return (
    <>
      {label && <FormLabel>{label}</FormLabel>}

      <Select
        placeholder={placeholder}
        name={name}
        value={value}
        onChange={onChange}
      >
        <option value={USER_TYPES.ADMIN}>{USER_TYPES.ADMIN}</option>
        <option value={USER_TYPES.USER}>{USER_TYPES.USER}</option>
      </Select>
    </>
  );
};

export default UMDSelect;
