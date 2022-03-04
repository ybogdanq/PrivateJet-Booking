import React, { useState } from "react";
import { SelectProps } from "./Select.props";
import styles from "./Select.module.scss";
import cn from "classnames";

const Select: React.FC<SelectProps> = ({
  defaultMessage,
  options,
  className,
  ...props
}): JSX.Element => {
  const [selectValue, setSelectValue] = useState<string | number>("");

  const onChooseHandler = (e: string | number) => {
    setSelectValue(e);
  };

  return (
    <select
      value={selectValue}
      onChange={(e) => onChooseHandler(e.target.value)}
      className={cn(styles.select, className)}
      {...props}
    >
      <option value="">{defaultMessage || "Choose an option"}</option>
      {options.map((option, i) => (
        <option value={option.code} key={i}>
          {option.value}
        </option>
      ))}
    </select>
  );
};

export default Select;
