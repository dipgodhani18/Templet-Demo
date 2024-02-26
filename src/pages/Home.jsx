import React from "react";
import Navbar from "../layout/Navbar";
import Section1 from "../components/home/Section1";
import Section2 from "../components/home/Section2";
import DesignRow from "../components/home/DesignRow";
import TestimonialRow from "../components/home/TestimonialRow";
import BlogRow from "../components/home/BlogRow";
import WorkRow from "../components/home/WorkRow";
import FigureRow from "../components/home/FigureRow";
import Footer from "../layout/Footer";
import HostingRow from "../components/home/HostingRow";

function Home() {
  return (
    <>
      <Navbar />
      <Section1 />
      <Section2 />
      <DesignRow />
      <TestimonialRow />
      <FigureRow />
      <BlogRow />
      <WorkRow />
      <HostingRow />
      <Footer />
    </>
  );
}

export default Home;
