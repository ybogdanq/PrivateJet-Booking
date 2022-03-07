import React from "react";
import { PrivateJetDescriptionProps } from "./PrivateJetDescription.props";
import cn from "classnames";
import styles from "../styles/PrivateJetDescription.module.scss";

const PrivateJetDescription: React.FC<PrivateJetDescriptionProps> = ({
  side,
  image,
  children,
  className,
  ...props
}): JSX.Element => {
  return (
    <div
      className={cn(className, styles.description__wrapper, {
        [styles.left]: side === "left",
        [styles.right]: side === "right",
      })}
      {...props}
    >
      <div className={styles.image}>
        <img src={image} alt="" />
      </div>
      <div className={styles.description}>{children}</div>
    </div>
  );
};

export default PrivateJetDescription;
