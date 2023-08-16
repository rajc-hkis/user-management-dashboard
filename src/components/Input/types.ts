/* eslint-disable @typescript-eslint/no-explicit-any */
export interface InputProps {
  label?: string;
  type?: string;
  placeholder?: string;
  value?: string | number | readonly string[] | undefined;
  onChange?: ({ target }: { target: any }) => void;
}
