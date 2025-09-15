import { FaMapMarkerAlt } from "react-icons/fa";

const MainHero = () => {
  return (
    <section className="hero">
      <div className="hero-left">
        <p className="offer">🔥 Don't miss limited-time savings: <span>Savings 15%</span></p>
        <h1>
          Fast<span className="dot">.</span> Secure<span className="dot">.</span> Stable<span className="dot">.</span>
          <br /> VPS Hosting
        </h1>
        <p className="subtext">
          Save time & money with simple and reliable cloud hosting trusted by{" "}
          <span className="highlight">80,000+ Agencies</span>, developers, and businesses that demand high performance!
        </p>
        <div className="buttons">
          <button className="btn-primary">Sign up – Free Trial</button>
          <button className="btn-secondary">Explore Products</button>
        </div>
      </div>

      <div className="hero-right">
        <div className="availability">64+ <br /> <span>Our Availability</span></div>
        <div className="map">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 2000 1001">
            <image href="https://upload.wikimedia.org/wikipedia/commons/8/80/World_map_-_low_resolution.svg" 
              width="1800" height="1001" />
            
            <circle cx="1030" cy="620" r="10" fill="#1e90ff" />
            <text x="1045" y="615" className="map-text">
              <FaMapMarkerAlt /> Nigeria
            </text>
            
            <circle cx="1000" cy="630" r="10" fill="#1e90ff" />
            <text x="1015" y="625" className="map-text">
              <FaMapMarkerAlt /> Ghana
            </text>
            
            <circle cx="1080" cy="800" r="10" fill="#1e90ff" />
            <text x="1095" y="795" className="map-text">
              <FaMapMarkerAlt /> South Africa
            </text>
          </svg>
        </div>
      </div>
      <div className="bottom-divider"></div>
    </section>
  );
};

export default MainHero;
