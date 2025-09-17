import React from 'react';
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaInstagram, FaLinkedin, FaFacebook } from "react-icons/fa";

const ContactInfo = () => {
  return (
    <section className="contact-info" data-aos="fade-up">
      <h4 className="tagline">Contact Now</h4>
      <h1>Talk To OneHost</h1>
      <p className='annual'>
        OneHost is here to provide assistance with large deployments, cloud migrations, <br />cloud cost comparisons, and proof of concepts. Get in touch below.
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
