import React from "react";
import styles from "../../styles/components/Home/BlogRow.module.css";

function BlogRowCommon(props) {
  return (
    <div className={styles.blogContainer}>
      <div className={styles.blogImageContainer}>
        <img src={props.image} alt={props.title} />
      </div>
      <div className={styles.blogContentContainer}>
        <h2>{props.title}</h2>
        <p>{props.desc}</p>
        <button>Read More</button>
      </div>
    </div>
  );
}

export default BlogRowCommon;
