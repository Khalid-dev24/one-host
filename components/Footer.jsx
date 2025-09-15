import { FaTwitter, FaFacebookF, FaDribbble, FaBehance, FaArrowUp } from "react-icons/fa";
import { useState, useEffect } from "react";

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
            <img src="https://dummyimage.com/40x40/fff/000.png&text=OH" alt="OneHost Logo" />
            <h2>OneHost</h2>
          </div>
          <p>
            Whether you run an e-commerce site or a web business, you want to attract as many
            visitors as possible or scale when you no longer want to be limited by a shared hosting account.
          </p>
          <h4>We Accepted <span className="accepted-line">a</span></h4>
          <div className="social-icons">
            <a href="#"><FaTwitter /></a>
            <a href="#"><FaFacebookF /></a>
            <a href="#"><FaDribbble /></a>
            <a href="#"><FaBehance /></a>
          </div>
        </div>

        {/* Links Section */}
        <div className="footer-links">
          <div>
            <h4>Products & Solution</h4>
            <ul>
              <li>Managed WordPress Hosting</li>
              <li>WordPress Hosting</li>
              <li>Reseller Hosting</li>
              <li>VPS Hosting</li>
              <li>Domain Registration</li>
              <li>Website Builder</li>
              <li>Add-Ons</li>
            </ul>
          </div>
          <div>
            <h4>Company Information</h4>
            <ul>
              <li>About Us</li>
              <li>Partners</li>
              <li>Blog</li>
              <li>News</li>
              <li>Hostingard Review</li>
              <li>Careers (We're hiring!)</li>
              <li>Affiliate Program</li>
            </ul>
          </div>
          <div>
            <h4>Help & Support</h4>
            <ul>
              <li>Contact Us</li>
              <li>Knowledge Base</li>
              <li>Live Chat</li>
              <li>Network Status</li>
              <li>Video Tutorials</li>
              <li>Affiliate Academy</li>
              <li>Hosting Glossary</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="footer-bottom">
        <p>© 2025 OneHost. All rights reserved</p>
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
