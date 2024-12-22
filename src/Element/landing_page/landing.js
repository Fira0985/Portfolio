import { motion } from "framer-motion";
import React, { useContext, useState } from "react";
import { FaInstagram, FaLinkedin, FaTelegram, FaWhatsapp } from 'react-icons/fa';
import profile from "../../assets/fonts/image/20240513_180033-removebg-preview-removebg-preview.png";
import Button from "../../components/button/Button";
import "../../components/Contact/ContactMe.css"; // Add CSS for modal
import StyleContext from "../../contexts/StyleContext";
import { greeting } from "../../file";
import "./landing.css";

export default function Greeting() {
  const { isDark } = useContext(StyleContext);
  // States for showing the Contact Me pop-up
  const [showContact, setShowContact] = useState(false);

  if (!greeting.displayGreeting) {
    return null;
  }

  function close(){
    setShowContact(false)
  }

  // Framer Motion animation variants
  const fadeInVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 1, ease: "easeInOut" },
    },
  };

  return (
    <motion.div
      className="greet-main"
      id="greeting"
      initial="hidden"
      animate="visible"
      variants={fadeInVariants}
    >
      <div className="greeting-main">
        <div className="greeting-text-div">
          <div>
            <h1
              className={isDark ? "dark-mode greeting-text" : "greeting-text"}
            >
              {greeting.title}
            </h1>
            <p
              className={
                isDark
                  ? "dark-mode greeting-text-p"
                  : "greeting-text-p subTitle"
              }
            >
              {greeting.subTitle}
            </p>
            <div className="button-greeting-div">
              <a href="#" onClick={() => setShowContact(true)}><Button text="Contact me" href="#contact" /></a>
              {greeting.resumeLink && (
                <a
                  href={require("./resume.pdf")}
                  download="Resume.pdf"
                  className="download-link-button"
                >
                  <Button text="Download my resume" />
                </a>
              )}
            </div>
          </div>
        </div>
        <div className="greeting-image-div">
          <img src={profile} />
        </div>
      </div>

      {/* Contact Me Pop-Up Modal */}
      {showContact && (
        <div className="contact-modal-overlay">
          <div className="contact-modal-container">
            <button className="close-button" onClick={close} aria-label="Close">
              &times;
            </button>
            <h1 className="contact-title">Contact Me</h1>
            <p className="contact-description">
              Feel free to get in touch via email or contact me through social media.
            </p>

            <div className="contact-options">
              <div className="contact-method">
                <h2>Email</h2>
                <p>
                  <a href="mailto:firafisberhanu4@gmail.com" className="contact-link">
                    firafisberhanu4@gmail.com
                  </a>
                </p>
              </div>

              <div className="social-media">
                <h2>Social Media</h2>
                <ul className="social-media-list">
                  <li>
                    <a
                      href="https://www.linkedin.com/in/firafis-berhanu-89345a327/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="social-link"
                    >
                      <FaLinkedin size={30} /> LinkedIn
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://t.me/@afafii13"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="social-link"
                    >
                    <FaTelegram size={30} />Telegram
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://wa.me/251985703516"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="social-link"
                    >
                    <FaWhatsapp size={30} />WhatsApp
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.instagram.com/yourhandle"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="social-link"
                    >
                    <FaInstagram size={30} />Instagram
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      )}
    </motion.div>
  );
}
