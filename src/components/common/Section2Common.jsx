import React from "react";
import styles from "../../styles/components/Home/Section2.module.css";

function Section2Common(props) {
  if (props.contentFirst) {
    return (
      <>
        <div className={styles.container}>
          <div
            className={
              styles.contentContainer + " " + styles.contentContainerCF
            }
          >
            <h1>
              {props.title} <span>{props.spanTitle}</span>
            </h1>
            <p>{props.description}</p>
            <button>Know More</button>
          </div>
          <div
            className={styles.imageContainer + " " + styles.imageContainerCF}
          >
            <img src={props.image} alt={props.title} />
          </div>
        </div>
      </>
    );
  }
  return (
    <>
      <div className={styles.container}>
        <div className={styles.imageContainer}>
          <img src={props.image} alt={props.title} />
        </div>
        <div className={styles.contentContainer}>
          <h1>
            {props.title} <span>{props.spanTitle}</span>
          </h1>
          <p>{props.description}</p>
          <button>Know More</button>
        </div>
      </div>
    </>
  );
}

export default Section2Common;
