import React from "react";
import styles from "./myModal.module.css";

const MyModal = ({ children, visible, setVisible }) => {
  const rootClasses = [styles.myModal];

  if (visible) {
    rootClasses.push(styles.active);
  }

  return (
    <div onClick={() => setVisible(false)} className={rootClasses.join(" ")}>
      <div
        className={styles.myModalContent}
        onClick={(e) => e.stopPropagation()}
      >
        {children}
      </div>
    </div>
  );
};

export default MyModal;
