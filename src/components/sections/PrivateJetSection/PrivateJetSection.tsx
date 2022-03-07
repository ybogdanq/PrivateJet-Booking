import React from "react";
import Title from "../../ui/title/Title";
import PrivateJetDescription from "./components/PrivateJetDescription";
import styles from "./styles/PrivateJetSection.module.scss";
import image1 from "../../../assets/PrivateJetSection/plane.webp";
import image2 from "../../../assets/PrivateJetSection/interier.webp";

const PrivateJetSection: React.FC = (): JSX.Element => {
  return (
    <div>
      <Title className={styles.title}>
        Private Jet for Business & Leisure Purposes
      </Title>

      <div className="container">
        <PrivateJetDescription image={image1} side="left">
          <h1 className={styles.description__title}>Private Jet Charter</h1>
          <p className={styles.content}>
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsum is that it has a more-or-less normal
            distribution of letters, as opposed to using 'Content here, content
            here', making it look like readable English. Many desktop publishing
            packages and web page editors
          </p>
        </PrivateJetDescription>
        <PrivateJetDescription image={image2} side="right">
          <h1 className={styles.description__title}>Business Jet Charter</h1>
          <p className={styles.content}>
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsum is that it has a more-or-less normal
            distribution of letters, as opposed to using 'Content here, content
            here', making it look like readable English. Many desktop publishing
            packages and web page editors
          </p>
        </PrivateJetDescription>
      </div>
    </div>
  );
};

export default PrivateJetSection;
