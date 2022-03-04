import React from "react";
import { FormChildrenType } from "./helpers/FormChildrenType";
import styles from "./styles/FormBody.module.scss";
import cn from "classnames";
import { ReactComponent as Arows } from "./helpers/arrows-left-right.svg";

const FormBody: React.FC<FormChildrenType> = (props) => {
  return (
    <div {...props}>
      <div className={styles.body__routes}>
        <div className={cn(styles.route__from, styles.route__item)}>
          <p>from</p>
          <h1>Lax</h1>
          <p>Los Angeles Intl Arpt,Los Angeles</p>
        </div>

        <span className={styles.routes__arrows}>
          <Arows />
        </span>

        <div className={cn(styles.route__to, styles.route__item)}>
          <p>to</p>
          <h1>Mia</h1>
          <p>Miami Intl,Miami</p>
        </div>
      </div>
      <div className={styles.body__calendar}>
        <div className={styles.calendar__departure}></div>
        <div className={styles.calendar__return}></div>
      </div>
    </div>
  );
};

export default FormBody;
