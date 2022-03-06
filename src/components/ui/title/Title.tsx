import React from "react";
import { TitleProps } from "./Title.props";
import cn from "classnames";
import styles from "./Title.module.scss";

const Title: React.FC<TitleProps> = ({
  children,
  className,
  ...props
}): JSX.Element => {
  return (
    <h1 className={cn(className, styles.title)} {...props}>
      {children}
    </h1>
  );
};

export default Title;
