import React from "react";
import { useNavigate } from "react-router-dom";

const PricingTable = () => {
  const navigate = useNavigate();

  
  const plans = [
    { name: "VPS Lite", vCPU: 1, memory: "1 GB", bandwidth: "Unlimited", storage: "20 GB SSD", price: "₦14,000" },
    { name: "VPS Basic", vCPU: 1, memory: "2 GB", bandwidth: "Unlimited", storage: "50 GB SSD", price: "₦19,000" },
    { name: "VPS Pro", vCPU: 2, memory: "2 GB", bandwidth: "Unlimited", storage: "50 GB SSD", price: "₦30,000" },
    { name: "VPS Business", vCPU: 2, memory: "4 GB", bandwidth: "Unlimited", storage: "80 GB SSD", price: "₦42,000" },
    { name: "VPS Enterprise", vCPU: 4, memory: "8 GB", bandwidth: "Unlimited", storage: "200 GB SSD", price: "₦65,000" },
    { name: "VPS Ultimate", vCPU: 6, memory: "12 GB", bandwidth: "Unlimited", storage: "300 GB SSD", price: "₦110,000" },
  ];

  return (
    <div className="pricing-table" id="pricing" data-aos="flip-left">
      <h2>VPS Cloud Hosting Pricing</h2>
      <table>
        <thead>
          <tr>
            <th>Package Name</th>
            <th>vCPUs</th>
            <th>Memory</th>
            <th>Bandwidth</th>
            <th>Storage</th>
            <th>Monthly Price (NGN)</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {plans.map((plan, index) => (
            <tr key={index}>
              <td>{plan.name}</td>
              <td>{plan.vCPU}</td>
              <td>{plan.memory}</td>
              <td>{plan.bandwidth}</td>
              <td>{plan.storage}</td>
              <td>{plan.price}</td>
              <td>
                <button
                  className="order-btn"
                  onClick={() => navigate("/signup")}
                >
                  Order Now
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default PricingTable;
