import { motion } from "framer-motion"; // Import motion from framer-motion
import React, { useContext } from "react";
import emoji from "react-easy-emoji";
import StyleContext from "../../contexts/StyleContext";
import "./Footer.css";

export default function Footer() {
  const { isDark } = useContext(StyleContext);

  return (
    <motion.footer
      className={isDark ? "dark-mode footer-div" : "footer-div"}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1, ease: "easeInOut" }}
    >
      <div className="footer-container">
        {/* Contact Us Section */}
        <div className="footer-section">
          <h3 className="footer-heading">Contact Me</h3>
          <p>Email: <a href="mailto:firafisberhanu4@gmail.com">firafisberhanu4@gmail.com</a></p>
          <p>Phone: <a href="tel:+251985703516">+251 985703516</a></p>
          <p>Location: Addis Ababa, Ethiopia</p>
        </div>

        {/* Quick Links Section */}
        <div className="footer-section">
          <h3 className="footer-heading">Quick Links</h3>
          <ul className="footer-links">
            <li><a href="#">Home</a></li>
            <li><a href="#skills">Skill</a></li>
            <li><a href="#Proficiency">Proficiency</a></li>
            <li><a href="#Education">Education</a></li>
            <li><a href="#Projects">Projects</a></li>
          </ul>
        </div>

        {/* Made By Section */}
        <div className="footer-section">
          <p className="footer-text">
            {emoji("Made by Firafis Berhanu")}
          </p>
          <p className="footer-text">
            GitHub:{" "}
            <a
              href="https://github.com/Fira0985"
              target="_blank"
              rel="noreferrer"
            >
              Fira0985
            </a>

            Linkedin:{" "}
            <a
              href="https://www.linkedin.com/in/firafis-berhanu-89345a327/"
              target="_blank"
              rel="noreferrer"
            >
              Firafis Berhanu
            </a>
          </p>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} Firafis Berhanu. All Rights Reserved.</p>
      </div>
    </motion.footer>
  );
}
