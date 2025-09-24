import { FaTwitter, FaFacebookF, FaDribbble, FaBehance, FaArrowUp } from "react-icons/fa";
import { useState, useEffect } from "react";
import { HashLink } from "react-router-hash-link";

const Footer = () => {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Left section */}
        <div className="footer-left">
          <div className="footer-logo">
            {/* <img src="https://dummyimage.com/40x40/fff/000.png&text=OH" alt="OneHost Logo" /> */}
            <h2>CloudOne</h2>
          </div>
          <p>
            Power your online business with OneHost cloud hosting. Enjoy reliable performance, instant scalability, and secure infrastructure. Whether you're launching an e-commerce store, building a portfolio, or growing a global brand. Focus on your success while we handle the technology.
          </p>
          <div className="social-icons">
            <a href="#"><FaTwitter /></a>
            <a href="#"><FaFacebookF /></a>
            {/* <a href="#"><FaDribbble /></a> */}
            {/* <a href="#"><FaBehance /></a> */}
          </div>
        </div>

        {/* Links Section */}
        <div className="footer-links">
          <div>
            <h4>Products & Solution</h4>
            <ul>
              {/* <li>Managed WordPress Hosting</li> */}
              {/* <li>WordPress Hosting</li> */}
              {/* <li>Reseller Hosting</li> */}
              <li>Cloud Hosting</li>
              <li>Web Hosting</li>
              <li>Domain Hosting</li>
              {/* <li>Add-Ons</li> */}
            </ul>
          </div>
          <div>
            <h4>Company Information</h4>
            <ul>
              <li><a href="/about">About Us</a></li>
              {/* <li>Partners</li> */}
              <li>Blog</li>
              {/* <li>News</li> */}
              {/* <li>CloudOne Review</li> */}
              {/* <li>Careers (We're hiring!)</li> */}
              <li>Affiliate Program</li>
            </ul>
          </div>
          <div>
            <h4>Help & Support</h4>
            <ul>
              <li><a href="/contact">Contact Us</a></li>
              <li>T&C</li>
              <li><HashLink smooth to="/#faq">
                FAQs </HashLink>
              </li>
              {/* <li>Network Status</li> */}
              {/* <li>Video Tutorials</li> */}
              {/* <li>Affiliate Academy</li> */}
              {/* <li>Hosting Glossary</li> */}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="footer-bottom">
        <p>© 2025 CloudOne. All rights reserved</p>
        <div className="payment-icons">
          <img src="https://img.icons8.com/color/48/000000/visa.png" alt="Visa" />
          <img src="https://img.icons8.com/color/48/000000/mastercard.png" alt="Mastercard" />
          <img src="https://img.icons8.com/color/48/000000/payoneer.png" alt="Payoneer" />
          <img src="https://img.icons8.com/color/48/000000/paypal.png" alt="PayPal" />
        </div>
      </div>

      {/* Scroll-to-top Button */}
      {showButton && (
        <button className="scroll-to-top" onClick={scrollToTop}>
          <FaArrowUp />
        </button>
      )}
    </footer>
  );
};

export default Footer;
