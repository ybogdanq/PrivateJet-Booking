import React from "react";
import Title from "../ui/title/Title";
import PrivateJetDescription from "./components/PrivateJetDescription";
import styles from "./styles/PrivateJetSection.module.scss";
import image1 from "../../assets/PrivateJetSection/plane.webp";
import image2 from "../../assets/PrivateJetSection/interier.webp";

const PrivateJetSection: React.FC = (): JSX.Element => {
  return (
    <div>
      <Title className={styles.title}>
        Private Jet for Business & Leisure Purposes
      </Title>

      <div className="container">
        <PrivateJetDescription image={image1} side="left">
          <h1 className={styles.description__title}>title</h1>
          <p className={styles.content}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas,
            veniam corporis velit nisi quaerat, dolor, dicta placeat nesciunt ab
            maiores excepturi. Dignissimos delectus libero mollitia. Omnis
            voluptatum aut dignissimos, deserunt accusantium maxime veniam nam,
            animi incidunt rerum vel doloribus quia sed eum perspiciatis
            doloremque magnam voluptate recusandae placeat minima et?
          </p>
        </PrivateJetDescription>
        <PrivateJetDescription image={image2} side="right">
          <h1 className={styles.description__title}>title</h1>
          <p className={styles.content}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas,
            veniam corporis velit nisi quaerat, dolor, dicta placeat nesciunt ab
            maiores excepturi. Dignissimos delectus libero mollitia. Omnis
            voluptatum aut dignissimos, deserunt accusantium maxime veniam nam,
            animi incidunt rerum vel doloribus quia sed eum perspiciatis
            doloremque magnam voluptate recusandae placeat minima et?
          </p>
        </PrivateJetDescription>
      </div>
    </div>
  );
};

export default PrivateJetSection;
