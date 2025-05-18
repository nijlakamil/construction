import React from 'react';
import './TransparentFooter.css'; // Import the CSS file
import { FaFacebook, FaInstagram, FaYoutube, FaLinkedin } from 'react-icons/fa'; // Import social media icons

const TransparentFooter = () => {
  return (
    <footer className="buildright-footer-transparent">
      <div className="footer-left-transparent">
        <div className="footer-logo-transparent">
          {/* Replace with your BuildRight Solutions logo */}
          <img src="/images/conlogo.png" alt="BuildRight Solutions Logo" />
        </div>
        <p>An ultimate platform for all your construction needs and growth. We believe in quality work therefore we provide reliable support throughout to our valued clients.</p>
        <div className="footer-social-transparent">
          <a href="https://facebook.com/" target="_blank" rel="noopener noreferrer"><FaFacebook /></a>
          <a href="https://instagram.com/" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
          <a href="https://youtube.com/" target="_blank" rel="noopener noreferrer"><FaYoutube /></a>
          <a href="https://linkedin.com/" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
        </div>
      </div>
      <div className="footer-middle-transparent">
        <div className="footer-column-transparent">
          <h3>Get Started</h3>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/services">Services</a></li>
            <li><a href="/solutions">Solutions</a></li>
            <li><a href="/about">About Us</a></li>
            <li><a href="/portfolio">Our Portfolio</a></li>
            <li><a href="/contact">Contact Us</a></li>
          </ul>
        </div>
        <div className="footer-column-transparent">
          <h3>Services</h3>
          <ul>
            <li><a href="/services/general-contracting">General Contracting</a></li>
            <li><a href="/services/construction-management">Construction Management</a></li>
            <li><a href="/services/design-build">Design-Build</a></li>
            <li><a href="/services/renovations">Renovations & Remodeling</a></li>
            <li><a href="/services/infrastructure">Infrastructure Development</a></li>
            <li><a href="/services/sustainable-building">Sustainable Building</a></li>
            {/* Add your actual construction services */}
          </ul>
        </div>
      </div>
      <div className="footer-right-transparent">
        <h3>Contact</h3>
        <p>Call now: <a href="tel:+1234567890">+1 234-567-890</a></p>
        <p>Email: <a href="mailto:info@buildrightsolutions.com">info@buildrightsolutions.com</a></p>
        <p>USA: 123 Construction Ave, Suite 456, Anytown, CA 90210</p>
        {/* Replace with your actual contact information */}
      </div>
    </footer>
  );
};

export default TransparentFooter;