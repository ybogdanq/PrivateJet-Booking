import React from "react";
import { ReactComponent as Logo } from "../assets/logo.svg";
import styles from "./styles/Footer.module.scss";

const Footer: React.FC = (): JSX.Element => {
  return (
    <footer className={styles.footer}>
      <div className="container">
        <Logo className={styles.footer__logo} />
        <nav className={styles.footer__nav}>
          <ul className={styles.nav__list}>
            <li className={styles.list__link}>
              <a href="#">SERVICES</a>
            </li>
            <li className={styles.list__link}>
              <a href="#">ABOUT US</a>
            </li>
            <li className={styles.list__link}>
              <a href="#">NEWS</a>
            </li>
            <li className={styles.list__link}>
              <a href="#">CONTACT</a>
            </li>
          </ul>
          <div className={styles.list__link}>
            © 2021 Air. All rights reserved.
          </div>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;
