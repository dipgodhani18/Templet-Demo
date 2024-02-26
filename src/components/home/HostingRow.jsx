import React from "react";
import HostingRowCommon from "../common/HostingRowCommon";
import styles from "../../styles/components/Home/HostingRow.module.css";
import Title from "../common/Title";

function HostingRow() {
  const data = [
    {
      title: "Premium",
      desc: "Everything you need resources to create your website Features",
      price: "150.00",
      listTitle: "Top Features",
      features: [
        "Standard Performance",
        "100 Websites",
        "100 GB SSD Storage",
        "Weekly Backups",
        "Unlimited Free SSL",
        "Unlimited Bandwidth",
        "Free Email",
        "Free Domain (₹799.00 value)",
        "Free CDN",
        "Dedicated IP Address",
      ],
    },
    {
      title: "Business",
      desc: "Level-up with resources more power and enhanced features",
      price: "270.00",
      listTitle: "Top Features",
      features: [
        "Standard Performance",
        "100 Websites",
        "100 GB SSD Storage",
        "Weekly Backups",
        "Unlimited Free SSL",
        "Unlimited Bandwidth",
        "Free Email",
        "Free Domain (₹799.00 value)",
        "Free CDN",
        "Dedicated IP Address",
      ],
    },
    {
      title: "Cloud Startup",
      desc: "Enjoy optimised resources performance & guaranteed resources ",
      price: "700.00",
      listTitle: "Top Features",
      features: [
        "Standard Performance",
        "100 Websites",
        "100 GB SSD Storage",
        "Weekly Backups",
        "Unlimited Free SSL",
        "Unlimited Bandwidth",
        "Free Email",
        "Free Domain (₹799.00 value)",
        "Free CDN",
        "Dedicated IP Address",
      ],
    },
  ];
  const components = data.map((value, index) => {
    return (
      <HostingRowCommon
        key={index}
        title={value.title}
        desc={value.desc}
        price={value.price}
        listTitle={value.listTitle}
        features={value.features}
        isActive={index === 1 ? true : false}
      />
    );
  });
  return (
    <div>
      <Title
        title="Choose Your Plan "
        desc="Lorem ipsum dolor, sit amet consectetur adipisicing elit. A perspiciatis doloribus repellendus iusto nemo, perferendis,  sit amet consectetur adipisicing elit. quas magni maxime excepturi animi eos, sequi asperiores ipsum totam.
"
      />
      <div className={styles.mainHostingRowContainer}>{components}</div>
    </div>
  );
}

export default HostingRow;
