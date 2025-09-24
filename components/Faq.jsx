import React, { useState } from "react";

const FAQ = () => {
  const [activeTab, setActiveTab] = useState("vps");
  const [openIndex, setOpenIndex] = useState(null);

  const tabs = [
    { id: "vps", label: "VPS", available: true },
    { id: "domains", label: "Domains", available: false },
    { id: "email", label: "Email services", available: false },
    { id: "vpn", label: "VPN", available: false },
  ];

  const faqData = [
    {
      question: "What is a VPS?",
      answer:
        "A VPS (Virtual Private Server) is a virtual machine that runs its own copy of an operating system, providing dedicated resources within a larger physical server."
    },
    {
      question: "Why choose CloudOne VPS?",
      answer:
        "CloudOne VPS offers high performance, scalability, and reliable uptime, making it a great choice for developers and businesses."
    },
    {
      question: "What VPS plans do you offer?",
      answer:
        "We offer a variety of VPS plans ranging from basic starter packages to high-performance enterprise solutions."
    },
    {
      question: "Is a VPS easy to manage?",
      answer:
        "Yes, our VPS comes with an intuitive control panel and 24/7 support to make management straightforward."
    },
    {
      question:
        "Can I upgrade or downgrade my VPS plan as my requirements change?",
      answer:
        "Absolutely! You can easily scale your plan up or down at any time to match your business needs."
    },
    {
      question: "How does a VPS differ from shared hosting?",
      answer:
        "Unlike shared hosting, a VPS provides dedicated resources and more control, ensuring better performance and flexibility."
    },
    {
      question: "How can I get started with VPS?",
      answer:
        "Simply choose a plan, sign up, and your VPS will be ready to use within minutes."
    }
  ];

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="faq-section" id="faq">
      <div className="faq-container">
        <h2>Frequently Asked Questions.</h2>

        <div className="tabs">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              className={`tab ${activeTab === tab.id ? "active" : ""} ${
                !tab.available ? "disabled" : ""
              }`}
              onClick={() => tab.available && setActiveTab(tab.id)}
              title={!tab.available ? "" : ""}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {activeTab === "vps" && (
          <div className="accordion">
            {faqData.map((item, index) => (
              <div
                key={index}
                className={`accordion-item ${
                  openIndex === index ? "open" : ""
                }`}
                onClick={() => toggleAccordion(index)}
              >
                <div className="accordion-header">
                  <span>{item.question}</span>
                  <span className="arrow">
                    {openIndex === index ? "▲" : "▼"}
                  </span>
                </div>
                {openIndex === index && (
                  <div className="accordion-body">
                    <p>{item.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default FAQ;
