import React from "react";
import Product from "../src/assets/product.png";

const AIProducts = () => {
  return (
    <section className="ai-products">
      <div className="ai-grid">
        
        <div className="ai-image">
          <img
            src={Product}
            alt="AI Illustration"
          />
        </div>

        
        <div className="ai-text">
          <span className="badge">New</span>
          <h2>
            Discover <br /> Our AI Product Range
          </h2>
          <p>
            Onehost provides a full range of Cloud services to develop
            innovative solutions and scale AI projects from A to Z. Discover the
            latest additions to our AI Suite.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AIProducts;
