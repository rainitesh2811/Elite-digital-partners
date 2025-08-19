import React from 'react';
import '../Hero/Hero.css';
import mainImg from '../../assets/main.jpg';
import heroImg from '../../assets/hero.jpg';
import heroImg1 from '../../assets/hero1.jpg';

// Main Hero component
const Hero = () => {
  return (
    <div className="hero-section">
      <div className="hero-container">
        {/* Main Content Area */}
        <div className="hero-content">
          {/* Left Side: Text Content */}
          <div className="hero-text-content">
            <h1 className="hero-title">
              Transform Your Vision with Our Digital Expertise
            </h1>
            <p className="hero-paragraph">
              Welcome to Elite Digital Partners, where we bring your ideas to life with our comprehensive digital solutions. Our skilled team is dedicated to providing innovative web and app development, effective social media management, and engaging video editing services.
            </p>
          </div>
          {/* Right Side: Main Image with Two Overlays */}
          <div className="hero-image-content">
            <div className="hero-image-wrapper">
              <img
                src={mainImg}
                alt="Main Illustration"
                className="hero-image"
              />
              <img
                src={heroImg1}
                alt="Overlay Top Right"
                className="hero-image-overlay hero-image-overlay-topright"
              />
              <img
                src={heroImg}
                alt="Overlay Bottom Left"
                className="hero-image-overlay hero-image-overlay-bottomleft"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;