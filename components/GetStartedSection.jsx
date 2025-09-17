import React from "react";

const GetStartedSection = () => {
  return (
    <section className="get-started-section" data-aos="fade-up">
      
      <h2>Get started in the SSD Cloud</h2>
      <div className="cta-box">
            <input type="text" placeholder="Email"/>
            <input type="password" placeholder="Password"/>
            <button className="cta-button"><a href="/signup">Create Account</a></button>
      </div>
    </section>
  );
};

export default GetStartedSection;
