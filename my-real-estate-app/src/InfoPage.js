import React from "react";
import { Link } from "react-router-dom";
import "./infoPage.css";
import logo from "./images/Logo.jpg";
import image1 from "./images/img1.jpeg";
import image2 from "./images/img2.jpeg";
import image3 from "./images/img3.jpeg";

function InfoPage() {
  return (
    <div className="info-page">
      {/* Hero Section */}
      <section className="info-hero">
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <img
            src={logo}
            alt="Zona Premium Residence Logo"
            className="hero-logo"
          />
          <h1 className="hero-title">Zona Premium Residence</h1>
          <p className="hero-subtitle">A new chapter of luxury living</p>
        </div>
      </section>

      {/* About Section */}
      <section className="about">
        <div className="about-image">
          <img src={image1} alt="Modern Residence" />
        </div>
        <div className="about-text">
          <h2>About Us</h2>
          <p>
            <strong>Zona Premium Residence</strong> represents the future of
            refined living — merging modern architecture, elegance, and comfort.
            Designed for those who appreciate excellence, our residences offer
            panoramic views, sophisticated finishes, and a connection to nature
            without compromising urban convenience.
          </p>
          <p>
            Our mission is to provide spaces that inspire a balanced lifestyle —
            where quality, comfort, and beauty coexist seamlessly.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="contact">
        <div className="contact-card">
          <h2>Contact Us</h2>
          <p>
            <strong>📍 Address:</strong> Ferizaj Kosovo
          </p>
          <p>
            <strong>📞 Phone:</strong> +1 (234) 567-8900
          </p>
          <p>
            <strong>✉️ Email:</strong> info@zonapremiumresidence.com
          </p>
          <Link to="/" className="cta-button">
            ← Back Home
          </Link>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="gallery-section">
        <h2>Our Vision in Images</h2>
        <div className="gallery-grid">
          <img src={image1} alt="Luxury View" />
          <img src={image2} alt="Residence Design" />
          <img src={image3} alt="Zona Premium Logo" />
        </div>
      </section>

      {/* Footer */}
      <footer className="info-footer">
        <p>&copy; 2025 Zona Premium Residence • Designed with passion</p>
      </footer>
    </div>
  );
}

export default InfoPage;
