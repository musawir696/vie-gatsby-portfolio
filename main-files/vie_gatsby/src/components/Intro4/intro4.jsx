import React, { useRef, useEffect, useCallback } from "react";
import { MapPin, Mail } from "lucide-react";
import { FaWhatsapp, FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

import particlesConfig from "config/particle-config";       
import particlesBlackConfig from "config/pr-s-black";       
import "./Intro4.css";

const Intro4 = ({ blackStar = false }) => {
  const sliderRef = useRef(null);

  const particlesInit = useCallback(async (engine) => {
    await loadFull(engine);
    document.querySelector("#particles-js canvas")?.style.removeProperty("position");
  }, []);

  useEffect(() => {
    setTimeout(() => {
      document.querySelector("#particles-js canvas")?.style.removeProperty("position");
    }, 500);
  }, []);

  return (
    <div className="intro-container">
      {/* Particle Background */}
      <Particles
        id="particles-js"
        init={particlesInit}
        options={blackStar ? particlesBlackConfig : particlesConfig}
      />

      {/* Header Section */}
      <header ref={sliderRef} className="intro-header">
        <div className="intro-center">
          <div className="logo-box">
            <img src="/img/Rubrixcode_icon.png" alt="RubrixCode Logo" className="logo-image" />
          </div>
          <h1 className="coming-soon-text">Coming Soon.</h1>
        </div>
      </header>

      {/* Footer Section */}
      <footer className="footer">
        <div className="footer-contact">
          <div className="footer-contact-item">
            <MapPin className="icon" />
            <span>FMC 5th Floor, Air University BIC, Islamabad</span>
          </div>
          <div className="footer-contact-item">
            <Mail className="icon" />
            <a href="mailto:support@rubrixcode.com">support@rubrixcode.com</a>
          </div>
          <div className="footer-contact-item">
            <FaWhatsapp className="icon" style={{ fontSize: "22px" }} />
            <a
              href="https://wa.me/923203573775"
              target="_blank"
              rel="noopener noreferrer"
            >
              +923203573775
            </a>
          </div>
        </div>

        <div className="footer-social">
          <div className="footer-icons">
            <a
              href="https://www.instagram.com/rubrixcode"
              className="social-button"
              aria-label="Instagram"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram className="social-icon" />
            </a>
            <a
              href="https://www.facebook.com/rubrixcode"
              className="social-button"
              aria-label="Facebook"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebookF className="social-icon" />
            </a>
            <a
              href="https://www.linkedin.com/company/rubrixcode"
              className="social-button"
              aria-label="LinkedIn"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedinIn className="social-icon" />
            </a>
          </div>
          <span className="copyright-text">&copy; 2025, RubrixCode</span>
        </div>
      </footer>
    </div>
  );
};

export default Intro4;
