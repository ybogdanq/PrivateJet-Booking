import React from "react";
import Select from "../../../ui/select/Select";
import { FormChildrenType } from "./helpers/FormChildrenType";

const FormHeader: React.FC<FormChildrenType> = (props) => {
  const mockOptionList = [
    { code: 1, value: "One person" },
    { code: 2, value: "Two persons" },
    { code: 3, value: "Three persons" },
  ];

  return (
    <header {...props}>
      <Select options={mockOptionList} defaultMessage="Round Trip" />
      <Select options={mockOptionList} defaultMessage="Flight Type" />
      <Select options={mockOptionList} defaultMessage="Person" />
    </header>
  );
};

export default FormHeader;
