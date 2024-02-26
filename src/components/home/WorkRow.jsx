import React from "react";
import WorkRowCommon from "../common/WorkRowCommon";
import Title from "../common/Title";
import styles from "../../styles/components/Home/WorkRow.module.css";
function WorkRow() {
  const data = [
    {
      image: "/images/18.avif",
      title: "Audium",
    },
    {
      image: "/images/19.avif",
      title: "Eviman",
    },
    {
      image: "/images/20.avif",
      title: " Journey",
    },
    {
      image: "/images/21.avif",
      title: "Biggoz",
    },
  ];

  const components = data.map((value, index) => {
    return (
      <WorkRowCommon key={index} image={value.image} title={value.title} />
    );
  });
  return (
    <div>
      <div>
        <Title
          title="Our Work"
          desc="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores, est veniam? Accusantium culpa sequi quos corrupti cupiditate! Veniam dignissimos quos eaque quisquam minus labore eius."
        />
        <div className={styles.mainWorkContainer}>{components}</div>
      </div>
    </div>
  );
}

export default WorkRow;
