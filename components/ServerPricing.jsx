import React from "react";


const ServerPricing = () => {
  const servers = [
    { name: "W1 Server", specs: "2C / 4GB / 100GB", price: "₦56,576.00" },
    { name: "W2 Server", specs: "4C / 8GB / 200GB", price: "₦113,152.00" },
    { name: "W3 Server", specs: "6C / 12GB / 300GB", price: "₦169,728.00" },
    { name: "W4 Server", specs: "8C / 16GB / 400GB", price: "₦213,044.00" },
    { name: "W5 Server", specs: "12C / 32GB / 500GB", price: "₦350,064.00" },
    { name: "W6 Server", specs: "16C / 64GB / 500GB", price: "₦556,920.00" },
  ];

  return (
    <div className="spricing-table">
      <h2>Windows</h2>
      <table className="s-table">
        <thead>
          <tr>
            <th className="s-head">Package Name</th>
            <th className="s-head">Specs (CPU/RAM/SSD)</th>
            <th className="s-head">Final Price @ 30% Markup (₦/mo)</th>
          </tr>
        </thead>
        <tbody className="s-body">
          {servers.map((server, index) => (
            <tr key={index}>
              <td className="name s-data">{server.name}</td>
              <td className="s-data">{server.specs}</td>
              <td className="price s-data">{server.price}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ServerPricing;
