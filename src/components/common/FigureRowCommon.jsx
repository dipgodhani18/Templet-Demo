import React from "react";
import styles from "../../styles/components/Home/FigureRow.module.css";
import CountUp from "react-countup";

function FigureRowCommon(props) {
  return (
    <div className={styles.figureContainer}>
      <h2>
        <CountUp end={props.count} duration={1} />+
      </h2>
      <p>{props.desc}</p>
    </div>
  );
}

export default FigureRowCommon;
