import React from "react";
import styles from "../styles/layout/Navbar.module.css";

function Navbar() {
  return (
    <div className={styles.container}>
      <h1>
        Think<span>Web</span> Hub
      </h1>
      <ul className={styles.listContent}>
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#">About Us</a>
        </li>
        <li>
          <a href="#">Services</a>
        </li>
        <li>
          <a href="#">Portfolio</a>
        </li>
        <li>
          <a href="#">Blog</a>
        </li>
        <li>
          <a href="#">Contact Us</a>
        </li>
      </ul>
      <button>Get A Quote</button>
      <i className="bi bi-list"></i>
    </div>
  );
}

export default Navbar;
