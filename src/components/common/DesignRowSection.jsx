import React from "react";
import styles from "../../styles/components/Home/DesignRow.module.css";
function DesignRowSection(props) {
  return (
    <div className={styles.designRowContainer}>
      <div className={styles.imageContainer}>
        <img src={props.image} alt={props.title} />
      </div>
      <div className={styles.contentContainer}>
        <h2>{props.title}</h2>
        <p>{props.description}</p>
        <button>Read More</button>
      </div>
    </div>
  );
}

export default DesignRowSection;
