import React from "react";
import TestimonialRowCommon from "../common/TestimonialRowCommon";
import styles from "../../styles/components/Home/TestimonialRow.module.css";
import Title from "../common/Title";
function TestimonialRow() {
  const data = [
    {
      image: "/images/07.webp",
      name: "John Wick",
      title: "CEO",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde reiciendis adipisci fugiat dolorem aliquam aperiam natus est nobis possimus fuga maxime, quod enim ex ipsum delectus veritatis alias recusandae inventore accusantium quia",
    },
    {
      image: "/images/08.jpg",
      name: "Michael Bracewell",
      title: "Head Chef",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde reiciendis adipisci fugiat dolorem aliquam aperiam natus est nobis possimus fuga maxime, quod enim ex ipsum delectus veritatis alias recusandae inventore accusantium quia",
    },
    {
      image: "/images/09.webp",
      name: "Nandre Burger",
      title: "Manager",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde reiciendis adipisci fugiat dolorem aliquam aperiam natus est nobis possimus fuga maxime, quod enim ex ipsum delectus veritatis alias recusandae inventore accusantium quia",
    },
    {
      image: "/images/10.webp",
      name: "Shamar Joseph",
      title: "Manager",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde reiciendis adipisci fugiat dolorem aliquam aperiam natus est nobis possimus fuga maxime, quod enim ex ipsum delectus veritatis alias recusandae inventore accusantium quia",
    },
    {
      image: "/images/11.webp",
      name: "Steve Smith",
      title: "Supervisor",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde reiciendis adipisci fugiat dolorem aliquam aperiam natus est nobis possimus fuga maxime, quod enim ex ipsum delectus veritatis alias recusandae inventore accusantium quia",
    },
    {
      image: "/images/12.webp",
      name: "Mitchell Starc",
      title: "Senior Manager",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde reiciendis adipisci fugiat dolorem aliquam aperiam natus est nobis possimus fuga maxime, quod enim ex ipsum delectus veritatis alias recusandae inventore accusantium quia",
    },
    {
      image: "/images/13.jpg",
      name: "Mitchell Marsh",
      title: "CEO",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde reiciendis adipisci fugiat dolorem aliquam aperiam natus est nobis possimus fuga maxime, quod enim ex ipsum delectus veritatis alias recusandae inventore accusantium quia",
    },
    {
      image: "/images/14.jpg",
      name: "Supervisor",
      title: "Actor and Stuntman",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde reiciendis adipisci fugiat dolorem aliquam aperiam natus est nobis possimus fuga maxime, quod enim ex ipsum delectus veritatis alias recusandae inventore accusantium quia",
    },
  ];

  const components = data.map((value, index) => {
    return (
      <TestimonialRowCommon
        key={index}
        image={value.image}
        name={value.name}
        title={value.title}
        desc={value.desc}
      />
    );
  });
  return (
    <div>
      <Title
        title="Our Testimonials"
        desc="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores, est veniam? Accusantium culpa sequi quos corrupti cupiditate! Veniam dignissimos quos eaque quisquam minus labore eius."
      />
      <div className={styles.mainTestimonialContainer}>{components}</div>
    </div>
  );
}

export default TestimonialRow;
