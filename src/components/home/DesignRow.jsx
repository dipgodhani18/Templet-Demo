import React from "react";
import DesignRowSection from "../common/DesignRowSection";
import styles from "../../styles/components/Home/DesignRow.module.css";
import Title from "../common/Title";
function DesignRow() {
  const data = [
    {
      image: "/images/03.avif",
      title: "Web Development",
      description:
        "Developing mobile Apps for both IOS and Androids with the latest techniques.",
    },
    {
      image: "/images/04.avif",
      title: "App Development",
      description:
        "Developing mobile Apps for both IOS and Androids with the latest techniques.",
    },
    {
      image: "/images/05.avif",
      title: "Graphic Design",
      description:
        "Developing mobile Apps for both IOS and Androids with the latest techniques.",
    },
    {
      image: "/images/06.avif",
      title: "Web Design",
      description:
        "Developing mobile Apps for both IOS and Androids with the latest techniques.",
    },
  ];

  const components = data.map((value, index) => {
    return (
      <DesignRowSection
        key={index}
        image={value.image}
        title={value.title}
        description={value.description}
      />
    );
  });
  return (
    <div>
      <Title
        title="My Work"
        desc="    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores, est veniam? Accusantium culpa sequi quos corrupti cupiditate! Veniam dignissimos quos eaque quisquam minus labore ei."
      />
      <div className={styles.mainCardContainer}>{components}</div>
    </div>
  );
}

export default DesignRow;
