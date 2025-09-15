import React from 'react';
import FormImg from "../src/assets/form-img1.png";

const ContactForm = () => {
  return (
    <section className="contact-form">
      <div className="form-container">
        <div className="form-left">
          <h2>Send Us a Message</h2>
          <p>Your email address will not be published. Required fields are marked *</p>

          <form>
            <div className="form-row">
              <input type="text" placeholder="Full Name *" required />
              <input type="email" placeholder="Email Address *" required />
            </div>
            <div className="form-row">
              <input type="text" placeholder="Subject" />
              <input type="text" placeholder="Phone" />
            </div>
            <textarea placeholder="Message *" required></textarea>
            <button type="submit">Send Message</button>
          </form>
        </div>

        <div className="form-right">
          <div className="image-stack">
            <img src={FormImg} alt="form images" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
