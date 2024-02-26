import React from "react";
import styles from "../../styles/components/Home/HostingRow.module.css";

function HostingRowCommon(props) {
  console.log(props);
  return (
    <div
      className={
        styles.hostingRowContainer +
        " " +
        (props.isActive === true ? styles.active : "")
      }
    >
      <div className={styles.hostingContentContainer}>
        <h2>{props.title}</h2>
        <p>{props.desc}</p>
        <span>{props.price} ₹</span>
        <button>Add to Cart</button>
      </div>
      <div className={styles.hostingFeaturesContainer}>
        <h2>{props.listTitle}</h2>
        <ul>
          {props.features.map((value, index) => {
            return (
              <li key={index}>
                <span>{value}</span>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}

export default HostingRowCommon;
