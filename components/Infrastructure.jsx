import React from "react";

const providers = ["Equinix", "DataBank", "H5", "Interxion", "Level(3)", "CoreSite"];

const InfrastructureSection = () => {
  return (
    <section className="infrastructure-section" data-aos="fade-right">
      <h2>Our Infrastructure</h2>
      <div className="provider-list">
        {providers.map((name, index) => (
          <div className="provider" key={index}>{name}</div>
        ))}
      </div>
    </section>
  );
};

export default InfrastructureSection;
