import React from "react";
import styles from "../../styles/components/Home/Section1.module.css";

function Section1() {
  return (
    <div className={styles.sectionContainer}>
      <h3>Crafting Your</h3>
      <h1>
        Web Destiny With <br /> Stunning{" "}
        <span>
          <i>Designs</i>
        </span>
      </h1>
      <p>
        We are a crew of builders, designers & investors building disruptive
        products in Web3 and empowering founders along the way
      </p>
      <button>Get A Quote</button>
    </div>
  );
}

export default Section1;
