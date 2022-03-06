import React from "react";
import Paper from "./ui/paper/Paper";
import Title from "./ui/title/Title";
import styles from "./styles/SpecificationSection.module.scss";
import Plane from "../assets/SpecificationSection/plane.png";
import SeatIcon from "../assets/SpecificationSection/seat.png";
import ScheduleIcon from "../assets/SpecificationSection/schedule.png";
import FirewallIcon from "../assets/SpecificationSection/web-browser.png";
import PilotIcon from "../assets/SpecificationSection/captain.png";

const SpecificationSection: React.FC = (props): JSX.Element => {
  return (
    <div {...props}>
      <div className="container">
        <Title>Private Jet Performance and Specifications</Title>
        <div className={styles.content}>
          <div className={styles.cards__wrapper}>
            <Paper>
              <img src={SeatIcon} alt="" />
              <h4 className={styles.card__title}>Luxury And Comfort</h4>
              <p className={styles.card__description}>
                It is a long established fact that a reader will be distracted
                by the readable
              </p>
            </Paper>
            <Paper>
              <img src={ScheduleIcon} alt="" />
              <h4 className={styles.card__title}>
                Personal schedule & booking
              </h4>
              <p className={styles.card__description}>
                It is a long established fact that a reader will be distracted
                by the readable
              </p>
            </Paper>
          </div>
          <div className={styles.image__wrapper}>
            <img src={Plane} alt="" />
          </div>
          <div className={styles.cards__wrapper}>
            <Paper>
              <img src={FirewallIcon} alt="" />
              <h4 className={styles.card__title}>SAFETY AND SECURITY</h4>
              <p className={styles.card__description}>
                It is a long established fact that a reader will be distracted
                by the readable
              </p>
            </Paper>
            <Paper>
              <img src={PilotIcon} alt="" />
              <h4 className={styles.card__title}>EXPERIENCED CREW</h4>
              <p className={styles.card__description}>
                It is a long established fact that a reader will be distracted
                by the readable
              </p>
            </Paper>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SpecificationSection;
