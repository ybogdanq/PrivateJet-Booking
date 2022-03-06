import React from "react";
import { PaperProps } from "./Paper.props";
import styles from "./Paper.module.scss";
import cn from "classnames";

const Paper: React.FC<PaperProps> = ({ children, className, ...props }) => {
  return (
    <div className={cn(className, styles.paper)} {...props}>
      {children}
    </div>
  );
};

export default Paper;
