import React from "react";
import FooterCommon from "../components/common/FooterCommon";
import Title from "../components/common/Title";
import styles from "../styles/layout/Footer.module.css";

function Footer() {
  const data = [
    {
      title: "Pages",
      list: ["About Us", "Services", "Portfolio", "Contact Us"],
    },
    {
      title: "Services",
      list: [
        "Domain & Hosting",
        "Web Design & Development",
        "App Development",
        "Web Maintenance",
        "Digital Marketing",
        "Graphic Design",
      ],
    },
    {
      title: "Products",
      list: [
        "Clinic Management",
        "Production Management",
        "Taxi Booking",
        "Business Listing",
      ],
    },
    {
      title: "Quick Links",
      list: [
        "FAQ",
        "Support",
        "Privacy Policy",
        "Refund Policy",
        "Shipping and Delivery",
        "Terms & Conditions",
      ],
    },
  ];
  const components = data.map((value, index) => {
    return <FooterCommon key={index} title={value.title} list={value.list} />;
  });
  return (
    <div>
      <Title
        title="ThinkWeb Hub"
        desc="We offer the services you need to succeed online. Get in touch with us and let us help
you transform your online presence. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Incidunt,
 officiis ipsum autem ab ducimus aspernatur quod ipsa commodi, facilis accusamus alias iusto! Nihil,
  quisquam ab. Sint iure vero tempora asperiores modi suscipit, cupiditate eum sit atque fugiat expedita
   voluptas minima non? Sed cumque vitae est!"
      />
      <div className={styles.mainFooterContainer}>{components}</div>
      <div className={styles.lastContent}>
        <p>© Think Web Hub | All rights reserved</p>
        <p>Made by : ThinkWebHub</p>
      </div>
    </div>
  );
}

export default Footer;
