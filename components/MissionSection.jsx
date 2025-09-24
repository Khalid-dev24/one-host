import React from "react";

const missionBoxes = [
  { stat: "20+", label: "Engineers and Developers", info: "Placeholder info for Compute Instances" },
  { stat: "1M+", label: "Instances Deployed", info: "Placeholder info for Bare Metal" },
  { stat: "50k+", label: "Customers Served", info: "Placeholder info for Block Storage" },
  { stat: "1k", label: "Support Answers / Month", info: "Placeholder info for Object Storage" },
];

const MissionSection = () => {
  return (
    <section className="mission-section" data-aos="fade-up">
      <div className="mission-left">
        <h2>Our Mission</h2>
        
        <p>
         CloudOne's mission is to make cloud infrastructure simple, accessible, and powerful for developers and businesses everywhere. With 10 strategically located data centers worldwide, we deliver seamless provisioning of public cloud, storage, and dedicated bare metal solutions.<br /><br />
         Our commitment is to provide a standardized, highly reliable, and high-performance cloud environment in every city we serve—making it easier than ever to launch and scale your cloud servers across the globe.
        </p>

      </div>

      <div className="mission-right">
        <div className="mission-grid">
          {missionBoxes.map((box, index) => (
            <div className="mission-box" key={index}>
              <h3>{box.stat}</h3>
              <p>{box.label}</p>
              {/* <div className="hover-info">{box.info}</div> */}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MissionSection;
