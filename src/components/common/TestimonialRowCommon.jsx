import React from "react";
import styles from "../../styles/components/Home/TestimonialRow.module.css";
function TestimonialRowCommon(props) {
  return (
    <div className={styles.testimonialContent}>
      <div className={styles.imageContent}>
        <img src={props.image} alt={props.title} />
      </div>
      <div className={styles.textContent}>
        <span>{props.name}</span>
        <h2>{props.title}</h2>
        <p>{props.desc}</p>
      </div>
    </div>
  );
}

export default TestimonialRowCommon;
