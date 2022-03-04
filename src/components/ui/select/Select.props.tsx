import { DetailedHTMLProps, HTMLAttributes } from "react";

export interface SelectProps
  extends DetailedHTMLProps<
    HTMLAttributes<HTMLSelectElement>,
    HTMLSelectElement
  > {
  options: IOption[];
  defaultMessage?: string;
}

export interface IOption {
  code: string | number;
  value: string;
}
