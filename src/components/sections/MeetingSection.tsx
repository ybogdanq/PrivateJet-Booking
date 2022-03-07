import React from "react";
import styles from "./styles/MeetingSection.module.scss";
import cn from "classnames";

const MeetingSection: React.FC = (): JSX.Element => {
  return (
    <section className={styles.meeting__screen}>
      <div className={cn("container", styles.container)}>
        <div className={styles.meetingScreen__greeting}>
          <h2 className={styles.greeting__text}>
            Enjoy <span>Reserved</span> <br />
            Overhead bin space
          </h2>
          <a href="#" className={styles.greeting__link}>
            Explore Now{" "}
            <span className={styles.greeting__link_arrow}>&#10132;</span>
          </a>
        </div>
        <div className={styles.window__asset}>
          <div className={styles.window__asset_helper}></div>
          <div className={styles.window__asset_brightness}></div>
        </div>
      </div>
    </section>
  );
};

export default MeetingSection;
