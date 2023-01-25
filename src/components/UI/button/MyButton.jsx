import React from "react";
import styles from "./myButton.module.css";

const MyButton = ({ children, ...props }) => {
  return (
    <button {...props} className={styles.myBtn}>
      {children}
    </button>
  );
};

export default MyButton;
