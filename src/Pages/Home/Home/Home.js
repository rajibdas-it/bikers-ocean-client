import React from "react";
import Banner from "../Banner/Banner";
import Categories from "../Categories/Categories";
import ContactSection from "../ContactSection/ContactSection";
import OurPartners from "../OurPartners/OurPartners";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <Categories></Categories>
      <OurPartners></OurPartners>
      <ContactSection></ContactSection>
    </div>
  );
};

export default Home;
