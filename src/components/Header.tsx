import React, { useEffect, useState } from "react";
import styles from "./styles/Header.module.scss";
import { ReactComponent as Logo } from "../assets/logo.svg";
import cn from "classnames";

const Header: React.FC = (): JSX.Element => {
  const [scrolledInstance, setScrolledInstance] = useState<boolean>(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", () =>
        setScrolledInstance(window.pageYOffset > 30)
      );
    }
  }, []);

  return (
    <header
      className={cn(styles.header, {
        [styles.scrolled]: scrolledInstance,
      })}
    >
      <div className={cn("container", styles.container)}>
        <a href="#" className={styles.logo}>
          <Logo />
        </a>
        <ul className={styles.header__menu}>
          <li className={styles.menu__link}>
            <a href="">Home</a>
          </li>

          <li className={styles.menu__link}>
            <a href="">Booking</a>
          </li>

          <li className={styles.menu__link}>
            <a href="">Private Jet</a>
          </li>

          <li className={styles.menu__link}>
            <a href="">Specification</a>
          </li>

          <li className={styles.menu__link}>
            <a href="">Luxury</a>
          </li>

          <li className={styles.menu__link}>
            <a href="">Charters</a>
          </li>

          <li className={styles.menu__link}>
            <a href="">Membership</a>
          </li>
        </ul>
        <div className={styles.header__controls}>
          <button className={styles.controls__button}>Register</button>
          <button className={cn(styles.active, styles.controls__button)}>
            Sign in
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
