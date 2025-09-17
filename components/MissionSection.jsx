import React from "react";

const missionBoxes = [
  { stat: "75+", label: "Engineers and Developers", info: "Placeholder info for Compute Instances" },
  { stat: "80M+", label: "Instances Deployed", info: "Placeholder info for Bare Metal" },
  { stat: "1.5M+", label: "Customers Served", info: "Placeholder info for Block Storage" },
  { stat: "35K", label: "Support Answers / Month", info: "Placeholder info for Object Storage" },
];

const MissionSection = () => {
  return (
    <section className="mission-section" data-aos="fade-up">
      <div className="mission-left">
        <h2>Our Mission</h2>
        <p>
          Vultr, founded in 2014, is on a mission to empower developers and businesses by simplifying the deployment of infrastructure via its advanced cloud platform. Vultr is strategically located in 32 global cloud data center regions and provides frictionless provisioning of public cloud, storage and single-tenant bare metal. <br /><br />
          Vultr has made it our priority to offer a standardized highly reliable high performance cloud compute environment in all of the cities we serve. Launching a cloud server environment in 32 cities around the globe has never been easier!
        </p>
      </div>

      <div className="mission-right">
        <div className="mission-grid">
          {missionBoxes.map((box, index) => (
            <div className="mission-box" key={index}>
              <h3>{box.stat}</h3>
              <p>{box.label}</p>
              <div className="hover-info">{box.info}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MissionSection;
