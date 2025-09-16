import React from "react";
import "../src/index.css";
import "../src/responsiveness.css"
import Navbar from "../components/Navbar";
import MainHero from "../components/Main-Hero";
import Footer from "../components/Footer";
import CoreBenefits from "../components/CoreBenefits";
import ArtProduct from "../components/ArtProduct";
import PricingTable from "../components/PricingTable";

function Home() {
  return (
    <div className="Home">
      <Navbar />
      <MainHero />
      <CoreBenefits />
      <ArtProduct />
      <PricingTable />
      <Footer />
    </div>
  );
}

export default Home;