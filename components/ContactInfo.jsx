import React from 'react';
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaInstagram, FaLinkedin, FaFacebook } from "react-icons/fa";

const ContactInfo = () => {
  return (
    <section className="contact-info">
      <h4 className="tagline">Contact Now</h4>
      <h1>Let's Connect & Navigate<br />Your Financial Goals</h1>
      <p className='annual'>
        With worldwide annual spend on digital advertising surpassing $325 billion, 
        it's no achiev to online marketing any business.
      </p>

      <div className="info-grid">
        <div>
          <h3>Office Address</h3>
          <p><FaMapMarkerAlt /> BigFix Technologies,<br />
           8 Adelabu street,<br />
          Surulere, Lagos, Nigeria.</p>
        </div>
         
        <div>
          <h3>Hotline</h3>
          <p><FaPhoneAlt /> +2341 234 5678<br />
          <FaEnvelope /> onehost@gmail.com</p>
        </div>

        <div>
          <h3>Social Media</h3>
          <p className="social-links">
            <a href="#"><FaInstagram /> Instagram</a><br />
            <a href="#"><FaLinkedin /> LinkedIn</a><br />
            <a href="#"><FaFacebook /> Facebook</a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default ContactInfo;
