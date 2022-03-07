import React from "react";
import styles from "./styles/ChartersSection.module.scss";
import Paper from "../ui/paper/Paper";
import Title from "../ui/title/Title";
import photo1 from "../../assets/ChartsSection/1.jpg";
import photo2 from "../../assets/ChartsSection/2.jpg";
import photo3 from "../../assets/ChartsSection/3.jpg";
import photo4 from "../../assets/ChartsSection/4.jpg";

const ChartersSection: React.FC = ({ ...props }) => {
  return (
    <section className={styles.charters} {...props}>
      <div className="container">
        <Title className={styles.section__title}>Luxury Charters</Title>
        <div className={styles.content}>
          <Paper className={styles.card__wrapper}>
            <div className={styles.chart__card}>
              <div className={styles.card__image}>
                <img src={photo1} alt="" />
              </div>
              <p className={styles.charter__name}>Piaggio P.180 Avanti</p>
            </div>
          </Paper>
          <Paper className={styles.card__wrapper}>
            <div className={styles.chart__card}>
              <div className={styles.card__image}>
                <img src={photo2} alt="" />
              </div>
              <p className={styles.charter__name}>Pilatus PC-12</p>
            </div>
          </Paper>
          <Paper className={styles.card__wrapper}>
            <div className={styles.chart__card}>
              <div className={styles.card__image}>
                <img src={photo3} alt="" />
              </div>
              <p className={styles.charter__name}>Piper pa27 aztec</p>
            </div>
          </Paper>
          <Paper className={styles.card__wrapper}>
            <div className={styles.chart__card}>
              <div className={styles.card__image}>
                <img src={photo4} alt="" />
              </div>
              <p className={styles.charter__name}>Beech BE100 King Air</p>
            </div>
          </Paper>
        </div>
      </div>
    </section>
  );
};

export default ChartersSection;
