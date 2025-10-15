import React, { useRef, useState } from "react";
import emailjs from "emailjs-com";
import FormImg from "../src/assets/form-img1.png";

const ContactForm = () => {
  const formRef = useRef();
  const [isSending, setIsSending] = useState(false);
  const [message, setMessage] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();
    setIsSending(true);
    setMessage("");

    emailjs
      .sendForm(
        "service_aj6jlz9",     
        "template_34h6e8k",     
        formRef.current,
        "nwOW_78-0Zf4o1ZH8"       
      )
      .then(
        () => {
          setIsSending(false);
          setMessage("✅ Message sent successfully!");
          formRef.current.reset();
        },
        (error) => {
          setIsSending(false);
          setMessage("❌ Something went wrong. Please try again.");
          console.error("EmailJS Error:", error);
        }
      );
  };

  return (
    <section className="contact-form">
      <div className="form-container">
        <div className="form-left" data-aos="fade-right">
          <h2>Send Us a Message</h2>
          <p>Your email address will not be published. Required fields are marked *</p>

          <form ref={formRef} onSubmit={sendEmail}>
            <div className="form-row">
              <input type="text" name="name" placeholder="Full Name *" required />
              <input type="email" name="email" placeholder="Email Address *" required />
            </div>
            <div className="form-row">
              <input type="text" name="subject" placeholder="Subject" />
              <input type="text" name="phone" placeholder="Phone" />
            </div>
            <textarea name="message" placeholder="Message *" required></textarea>
            <button type="submit" disabled={isSending}>
              {isSending ? "Sending..." : "Send Message"}
            </button>
          </form>

          {message && <p className="status-message">{message}</p>}
        </div>

        <div className="form-right" data-aos="fade-left">
          <div className="image-stack">
            <img src={FormImg} alt="form illustration" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
