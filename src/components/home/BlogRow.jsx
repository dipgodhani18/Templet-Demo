import React from "react";
import BlogRowCommon from "../common/BlogRowCommon";
import Title from "../common/Title";
import styles from "../../styles/components/Home/BlogRow.module.css";

function BlogRow() {
  const data = [
    {
      image: "/images/15.avif",
      title: "How to make a website using WordPress?",
      desc: "Front-end Development: This is the process of creating the visual and interactive components of a website…",
    },
    {
      image: "/images/16.avif",
      title: "How to make a website using WordPress?",
      desc: "Front-end Development: This is the process of creating the visual and interactive components of a website…",
    },
    {
      image: "/images/17.avif",
      title: "How to make a website using WordPress?",
      desc: "Front-end Development: This is the process of creating the visual and interactive components of a website…",
    },
  ];

  const components = data.map((value, index) => {
    return (
      <BlogRowCommon
        key={index}
        image={value.image}
        title={value.title}
        desc={value.desc}
      />
    );
  });
  return (
    <div>
      <Title title="Our Blog Content" />
      <div className={styles.mainBlogContainer}>{components}</div>
    </div>
  );
}

export default BlogRow;
