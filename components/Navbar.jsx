import { useState, useEffect } from "react";
import { FaChevronDown, FaBars, FaTimes, FaServer, FaCloud, FaNetworkWired, FaRocket, FaBolt, FaCrown, FaGem, FaStar, FaPhoneAlt, FaLock, FaBook, FaFileContract, FaQuestionCircle } from "react-icons/fa";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleMenuToggle = () => {
    setMenuOpen((prev) => !prev);
  };

  return (
    <nav className={`navbar ${scrolled ? "scrolled" : ""}`}>
      <div className="nav-container">
        <div className="logo"><a href="/">OneHost</a></div>
        <div className="hamburger" onClick={handleMenuToggle}>
          {menuOpen ? <FaTimes /> : <FaBars />}
        </div>
        <ul className={`nav-links ${menuOpen ? "open" : ""}`}>

          {/* <li className="dropdown">
            Hosting <FaChevronDown className="icon" />
            <div className="dropdown-menu mega-menu">
              <div className="dropdown-item">
                <FaServer className="icon colored" />
                <div>
                  <h4>Web Hosting</h4>
                  <p>Affordable hosting solution for small websites.</p>
                </div>
              </div>
              <div className="dropdown-item">
                <FaCloud className="icon colored" />
                <div>
                  <h4>Cloud Hosting</h4>
                  <p>Scalable cloud servers with high uptime.</p>
                </div>
              </div>
              <div className="dropdown-item">
                <FaNetworkWired className="icon colored" />
                <div>
                  <h4>Domain Hosting</h4>
                  <p>Virtual servers for better speed & control.</p>
                </div>
              </div>
            </div>
          </li> */}

          <li className="dropdown">
            Products <FaChevronDown className="icon" />
            <div className="dropdown-menu mega-menu">
              <div className="dropdown-item">
                <FaRocket className="icon colored" />
                <div>
                  <h4><a href="/#pricing">VPS Lite</a></h4>
                  {/* <p>Affordable hosting solution for small websites.</p> */}
                </div>
              </div>
              <div className="dropdown-item">
                <FaCloud className="icon colored" />
                <div>
                  <h4><a href="/#pricing">VPS Basic</a></h4>
                  {/* <p>Scalable cloud servers with high uptime.</p> */}
                </div>
              </div>
              <div className="dropdown-item">
                <FaBolt className="icon colored" />
                <div>
                  <h4><a href="/#pricing">VPS Pro</a></h4>
                  {/* <p>Virtual servers for better speed & control.</p> */}
                </div>
              </div>
              <div className="dropdown-item">
                <FaStar className="icon colored" />
                <div>
                  <h4><a href="/#pricing">VPS Business</a></h4>
                  {/* <p>Virtual servers for better speed & control.</p> */}
                </div>
              </div>
              <div className="dropdown-item">
                <FaGem className="icon colored" />
                <div>
                  <h4><a href="/#pricing">VPS Enterprise</a></h4>
                  {/* <p>Virtual servers for better speed & control.</p> */}
                </div>
              </div>
              <div className="dropdown-item">
                <FaCrown className="icon colored" />
                <div>
                  <h4><a href="/#pricing">VPS Ultimate</a></h4>
                  {/* <p>Virtual servers for better speed & control.</p> */}
                </div>
              </div>
            </div>
          </li>
          
          
          <li className="dropdown">
            <a href="/#pricing">Pricing 
            {/* <FaChevronDown className="icon" /> */}
            {/* <ul className="dropdown-menu">
              <li>Dedicated</li>
              <li>Managed</li>
            </ul> */}</a>
          </li>

          
          <li className="dropdown">
            Support <FaChevronDown className="icon" />
            <div className="dropdown-menu mega-menu grid">
              <div className="dropdown-item">
                <FaPhoneAlt className="icon colored" />
                <div>
                  <h4><a href="/contact">Contact Us</a></h4>
                  <p>Reach our 24/7 support team for help.</p>
                </div>
              </div>
              <div className="dropdown-item">
                <FaLock className="icon colored" />
                <div>
                  <h4>Privacy Policy</h4>
                  <p>Learn how we protect your personal data.</p>
                </div>
              </div>
              <div className="dropdown-item">
                <FaBook className="icon colored" />
                <div>
                  <h4>Knowledge Base</h4>
                  <p>Guides & articles to solve common issues.</p>
                </div>
              </div>
              <div className="dropdown-item">
                <FaFileContract className="icon colored" />
                <div>
                  <h4>Terms & Conditions</h4>
                  <p>Read our terms of service in detail.</p>
                </div>
              </div>
              <div className="dropdown-item">
                <FaQuestionCircle className="icon colored" />
                <div>
                  <h4>FAQs</h4>
                  <p>Quick answers to frequently asked questions.</p>
                </div>
              </div>
            </div>
          </li>

          
          <li className="dropdown">
            Market Place 
            {/* <FaChevronDown className="icon" /> */}
          </li>

          <li className="dropdown">
            <a href="/about">About Us</a>
            {/* <FaChevronDown className="icon" /> */}
          </li>

          <li className="mobile-only">
            <button className="get-started">Login/Signup</button>
          </li>
        </ul>
        <button className="get-started desktop-only"><a href="/login">Login/Signup</a></button>
      </div>
    </nav>
  );
};

export default Navbar;
