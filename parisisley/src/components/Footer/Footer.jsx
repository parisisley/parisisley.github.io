import React from "react";
import "./Footer.css";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

function Footer() {
  return (
    <div className="footer-section">
      <div className="copyright-section">
        <p className="copyright-sentence">Copyright © 2025 Paris Isley. All rights reserved. </p>
      </div>
      <div className="icons-section">
        <a href="https://github.com/parisisley" className="link">
          <FaGithub className="icon" />
        </a>
        <a href="https://www.linkedin.com/in/paris-isley/" className="link">
          <FaLinkedin className="icon" />
        </a>
        <a href="https://www.instagram.com/paris.isley" className="link">
          <FaInstagram className="icon" />
        </a>
      </div>
    </div>
  );
}

export default Footer;
