import React from "react";
import Paper from "../ui/paper/Paper";
import Title from "../ui/title/Title";
import styles from "./styles/MembershipSection.module.scss";

const MembershipSection: React.FC = (props): JSX.Element => {
  return (
    <div {...props} className={styles.membership__section}>
      <div className="container">
        <Title className={styles.section__title}>Enjoy our membership</Title>
        <div className={styles.content}>
          <Paper className={styles.card}>
            <h1 className={styles.card__title}>Popular</h1>
            <h2 className={styles.card__subtitle}>What You’ll Get</h2>
            <ul className={styles.card__list}>
              <li className={styles.list_item}>One-time initiation fee $0</li>
              <li className={styles.list_item}>Deposit $50k</li>
              <li className={styles.list_item}>Pricing / rates Dynamic</li>
              <li className={styles.list_item}>Priority fleet access Yes</li>
              <li className={styles.list_item}>Guaranteed fleet access No</li>
            </ul>
            <h1 className={styles.card__price}>
              $250<span>/month</span>
            </h1>
            <button className={styles.card__button}>Choose</button>
          </Paper>
          <Paper className={styles.card}>
            <h1 className={styles.card__title}>Business</h1>
            <h2 className={styles.card__subtitle}>What You’ll Get</h2>
            <ul className={styles.card__list}>
              <li className={styles.list_item}>One-time initiation fee $0</li>
              <li className={styles.list_item}>Deposit $50k</li>
              <li className={styles.list_item}>Pricing / rates Dynamic</li>
              <li className={styles.list_item}>Priority fleet access Yes</li>
              <li className={styles.list_item}>Guaranteed fleet access No</li>
            </ul>
            <h1 className={styles.card__price}>
              $480<span>/month</span>
            </h1>
            <button className={styles.card__button}>Choose</button>
          </Paper>
          <Paper className={styles.card}>
            <h1 className={styles.card__title}>Elite</h1>
            <h2 className={styles.card__subtitle}>What You’ll Get</h2>
            <ul className={styles.card__list}>
              <li className={styles.list_item}>One-time initiation fee $0</li>
              <li className={styles.list_item}>Deposit $50k</li>
              <li className={styles.list_item}>Pricing / rates Dynamic</li>
              <li className={styles.list_item}>Priority fleet access Yes</li>
              <li className={styles.list_item}>Guaranteed fleet access No</li>
            </ul>
            <h1 className={styles.card__price}>
              $680<span>/month</span>
            </h1>
            <button className={styles.card__button}>Choose</button>
          </Paper>
        </div>
      </div>
    </div>
  );
};

export default MembershipSection;
