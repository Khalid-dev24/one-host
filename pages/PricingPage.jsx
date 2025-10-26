import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
// import { useNavigate } from "react-router-dom";
import PricingPageHero from "../components/PricingPageHero";
import ServerPricing from "../components/ServerPricing";


const PricingPage = () => {

  // const navigate = useNavigate();
  
  const plans = [
    { name: "VPS Lite", vCPU: 1, memory: "1 GB", bandwidth: "Unlimited", storage: "20GB SSD", price: "₦14,000", orderUrl: "https://host.enterpriseone.com.ng/index.php?rp=/store/Linux-Cloud-Server/vps-lite" },
    { name: "VPS Basic", vCPU: 1, memory: "2 GB", bandwidth: "Unlimited", storage: "50GB SSD", price: "₦19,000", orderUrl: "https://host.enterpriseone.com.ng/index.php?rp=/store/Linux-Cloud-Server/vps-basic" },
    { name: "VPS Pro", vCPU: 2, memory: "2 GB", bandwidth: "Unlimited", storage: "50GB SSD", price: "₦30,000", orderUrl: "https://host.enterpriseone.com.ng/index.php?rp=/store/Linux-Cloud-Server/vps-pro" },
    { name: "VPS Business", vCPU: 2, memory: "4 GB", bandwidth: "Unlimited", storage: "80GB SSD", price: "₦42,000", orderUrl: "https://host.enterpriseone.com.ng/index.php?rp=/store/Linux-Cloud-Server/vps-business" },
    { name: "VPS Enterprise", vCPU: 4, memory: "8 GB", bandwidth: "Unlimited", storage: "200GB SSD", price: "₦65,000", orderUrl: "https://host.enterpriseone.com.ng/index.php?rp=/store/Linux-Cloud-Server/vps-enterprise" },
    { name: "VPS Ultimate", vCPU: 6, memory: "12 GB", bandwidth: "Unlimited", storage: "300GB SSD", price: "₦110,000", orderUrl: "https://host.enterpriseone.com.ng/index.php?rp=/store/Linux-Cloud-Server/vps-ultimate" },
  ];
  return (
    <> 
      <Navbar />
      <PricingPageHero />
      <div className="pricing-table pricing-page" id="pricing" data-aos="flip-left">
      <p>Linux</p>
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
                  onClick={() => window.open(plan.orderUrl, '_blank', 'noopener,noreferrer')}
                >
                  Order Now
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    <ServerPricing />
    <Footer />
    </>
  );
};


export default PricingPage;

