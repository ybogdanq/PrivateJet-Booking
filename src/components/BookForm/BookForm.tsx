import React from "react";
import FormBody from "./components/FormBody";
import FormFooter from "./components/FormFooter";
import FormHeader from "./components/FormHeader";
import styles from "./components/styles/BookForm.module.scss";

const BookForm: React.FC = (): JSX.Element => {
  return (
    <section className={styles.flightBook__wrapper}>
      <div className="container">
        <form className={styles.flightBook}>
          <FormHeader className={styles.flightBook__header} />
          <FormBody className={styles.flightBook__body} />
          <FormFooter className={styles.flightBook__footer} />
          <button className="flightBook__button">
            Book Flights <span className="greeting__link_arrow">&#10132;</span>
          </button>
        </form>
      </div>
    </section>
  );
};

export default BookForm;
