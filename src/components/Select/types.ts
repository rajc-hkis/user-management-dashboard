/* eslint-disable @typescript-eslint/no-explicit-any */
export interface SelectProps {
  label?: string;
  value?: string;
  name?: string;
  placeholder?: string;
  onChange?: (target: { target: any }) => void;
}
