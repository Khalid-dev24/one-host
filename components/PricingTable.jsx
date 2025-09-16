import React from "react";

const PricingTable = () => {
  return (
    <div className="pricing-table" id="pricing">
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
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>VPS Lite</td>
            <td>1</td>
            <td>1 GB</td>
            <td>Unlimited</td>
            <td>20 GB SSD</td>
            <td>₦14,000</td>
          </tr>
          <tr>
            <td>VPS Basic</td>
            <td>1</td>
            <td>2 GB</td>
            <td>Unlimited</td>
            <td>50 GB SSD</td>
            <td>₦19,000</td>
          </tr>
          <tr>
            <td>VPS Pro</td>
            <td>2</td>
            <td>2 GB</td>
            <td>Unlimited</td>
            <td>50 GB SSD</td>
            <td>₦30,000</td>
          </tr>
          <tr>
            <td>VPS Business</td>
            <td>2</td>
            <td>4 GB</td>
            <td>Unlimited</td>
            <td>80 GB SSD</td>
            <td>₦42,000</td>
          </tr>
          <tr>
            <td>VPS Enterprise</td>
            <td>4</td>
            <td>8 GB</td>
            <td>Unlimited</td>
            <td>200 GB SSD</td>
            <td>₦65,000</td>
          </tr>
          <tr>
            <td>VPS Ultimate</td>
            <td>6</td>
            <td>12 GB</td>
            <td>Unlimited</td>
            <td>300 GB SSD</td>
            <td>₦110,000</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default PricingTable;
