import React from "react";
import { FaGlobe, FaMoneyBillWave, FaServer, FaCompactDisc, FaLinux, FaHandshake } from "react-icons/fa";

const differentiators = [
  {
    title: "Geographic Footprint",
    description: "Vultr's 32 strategically placed points of presence in cities around the world make it more than likely you can launch a cloud environment close to you or your customers",
    icon: <FaGlobe className="diff-icon" />,
  },
  {
    title: "One Click Apps",
    description: "Vult's one-click apps allow you to quickly launch WordPress blogs, garme servers, development environments and more with a single click.",
    icon: <FaMoneyBillWave className="diff-icon" />,
  },
  {
    title: "Full Resource Control",
    description: "Local administrator/root and out-of-band console access is provided on all bare metal and virtuallized comput instances.",
    icon: <FaServer className="diff-icon" />,
  },
  {
    title: "Upload ISO / Mount ISO",
    description: "Created virtually unlimited Operating System options by uploading any ISO and mouriting it on your cloud servers.",
    icon: <FaCompactDisc className="diff-icon" />,
  },
  {
    title: "Linux, Windows and BSD",
    description: "Vultr natively supports a wide range of popular Linux, Windows, and BGD distributions.",
    icon: <FaLinux className="diff-icon" />,
  },
  {
    title: "No Long Term Contracts",
    description: "Hourly billing is standard on our products and services. Pay only for what you use.",
    icon: <FaHandshake className="diff-icon" />,
  },
];

const DifferentiatorsSection = () => {
  return (
    <section className="differentiators-section">
      <h2>Our Key Differentiators</h2>
      <div className="differentiators-grid">
        {differentiators.map((item, index) => (
          <div className="differentiator-item" key={index} data-aos="zoom-in">
                {item.icon}
                <div>
                    <h4>{item.title}</h4>
                    <p>{item.description}</p>
                </div>
            </div>

        ))}
      </div>
    </section>
  );
};

export default DifferentiatorsSection;
