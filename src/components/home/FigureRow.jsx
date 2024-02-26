import React from "react";
import FigureRowCommon from "../common/FigureRowCommon";
import styles from "../../styles/components/Home/FigureRow.module.css";
import Title from "../common/Title";

function FigureRow() {
  const data = [
    {
      count: "250",
      desc: "  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque, blanditiis.",
    },
    {
      count: "570",
      desc: "  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque, blanditiis.",
    },
    {
      count: "950",
      desc: "  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque, blanditiis.",
    },
    {
      count: "1150",
      desc: "  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque, blanditiis.",
    },
    {
      count: "1370",
      desc: "  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque, blanditiis.",
    },
    {
      count: "1950",
      desc: "  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque, blanditiis.",
    },
  ];

  const components = data.map((value, index) => {
    return (
      <FigureRowCommon key={index} count={value.count} desc={value.desc} />
    );
  });
  return (
    <div>
      <Title
        title="Our Progrss"
        desc="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perspiciatis, voluptatibus?"
      />
      <div className={styles.figureMainContainer}>{components}</div>
    </div>
  );
}

export default FigureRow;
