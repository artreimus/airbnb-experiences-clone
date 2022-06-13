import React from "react";
import photoGrid from "../images/photo-grid.png";

export default function Hero() {
  return (
    <section className="hero">
      <img src={photoGrid} alt="Airbnb Logo" className="hero-images" />
      <div className="hero-text-container">
        <h1 className="hero-header">Online Experiences</h1>
        <p className="hero-text">
          Join unique interactive activities led by one-of-a-kind-hosts-all
          without leaving home.
        </p>
      </div>
    </section>
  );
}
