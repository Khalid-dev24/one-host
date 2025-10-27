import React from "react";
import { FaServer, FaLock, FaGlobe, FaHeadset, FaUsers } from "react-icons/fa";
import VPS from "../src/assets/vps-server.png";
import Dedicated from "../src/assets/dedicated-server.png";

const CoreBenefits = () => {
  return (
    <section className="core-benefits" data-aos="fade-up">
      <p className="tag"><a href="/pricing-page">Available Products</a></p>
      <h2 className="title">
        Set-up & scale your Core Benefits Effortlessly
      </h2>

      <div className="benefits-grid">
        <div className="telegram-box">
          <h3>
            Subscribe to Our Telegram Channel News, Updates,{" "}
            <span className="highlight">Promotions</span> and Discounts
          </h3>
          <button className="btn">Go to Telegram</button>
        </div>

        
        <div className="cards">
          <div className="card">
            <h4>VPS Server</h4>
            <p>
              Virtual private servers guarantee uninterrupted operation of your
              online project of any kind.
            </p>
            <span className="price">From #14,000 /mo</span>
            <img src={VPS} alt="vps-server" />
          </div> 

          <div className="card">
            <h4>Dedicated Server</h4>
            <p>
              Your personal dedicated server will ensure your website or app
              will work fast with high fault.
            </p>
            <span className="price">From #20,000 /mo</span>
            <img src={Dedicated} alt="dedicated-server" />
          </div>
        </div>
      </div>

      
      <div className="features">
        <div className="feature">
          <FaGlobe /> Global Infrastructure
        </div>
        <div className="feature">
          <FaHeadset /> True Technical Support
        </div>
        <div className="feature">
          <FaServer /> 10 Years of Experience
        </div>
        <div className="feature">
          <FaUsers /> {">"} 5,000 Customers
        </div>
      </div>
    </section>
  );
};

export default CoreBenefits;
