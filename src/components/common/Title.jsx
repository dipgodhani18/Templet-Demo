import React from "react";
import styles from "../../styles/components/common/Title.module.css";
function Title(props) {
  return (
    <div className={styles.titleContainer}>
      <h1>{props.title}</h1>
      <p>{props.desc}</p>
    </div>
  );
}

export default Title;
