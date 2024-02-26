import React from "react";
import styles from "../../styles/components/Home/WorkRow.module.css";
function WorkRowCommon(props) {
  return (
    <div className={styles.workContainer}>
      <div className={styles.workImageContainer}>
        <img src={props.image} alt={props.title} />
      </div>
      <div className={styles.workContentContainer}>
        <h2>{props.title}</h2>
        <button>Read More</button>
      </div>
    </div>
  );
}

export default WorkRowCommon;
