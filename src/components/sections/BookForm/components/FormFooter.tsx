import React from "react";
import { FormChildrenType } from "./helpers/FormChildrenType";
import styles from "./styles/FormFooter.module.scss";
import cn from "classnames";

const FormFooter: React.FC<FormChildrenType> = ({ className, ...props }) => {
  return (
    <div {...props} className={cn(className, styles.footer)}>
      <a href="#" className={styles.link}>
        Add Requirements
      </a>
    </div>
  );
};

export default FormFooter;
