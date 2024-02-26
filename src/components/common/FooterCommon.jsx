import React from "react";
import styles from "../../styles/layout/Footer.module.css";

function FooterCommon(props) {
  return (
    <div className={styles.footerContainer}>
      <h2>{props.title}</h2>
      <ul>
        {props.list.map((value, index) => {
          return (
            <li key={index}>
              <span>{value}</span>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default FooterCommon;
