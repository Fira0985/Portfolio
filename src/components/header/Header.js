import React, { useContext, useState } from "react";
import Headroom from "react-headroom";
import { FaInstagram, FaLinkedin, FaTelegram, FaWhatsapp } from 'react-icons/fa';
import StyleContext from "../../contexts/StyleContext";
import {
  greeting,
} from "../../file";
import "../Contact/ContactMe.css"; // Add CSS for modal
import ToggleSwitch from "../ToggleSwitch/ToggleSwitch";
import "./Header.css";

function Header() {
  const { isDark } = useContext(StyleContext);
  const [isOpen, setIsOpen] = useState(true);


  // States for showing the Contact Me pop-up
  const [showContact, setShowContact] = useState(false);

  const onClick = () => {
    setIsOpen(!isOpen);
  };
  console.log(isOpen)

  function close() {
    setShowContact(false)
  }

  return (
    <>
      <Headroom>
        <header className={isOpen ? "header" : "header-closed"}>
          <a className="logo">
            <span className={"animate-name"}>
              <button className="hamburger-icon" onClick={onClick}>
                <span></span>
                <span></span>
                <span></span>
              </button>
              <button className="name">{greeting.username}</button>
            </span>
          </a>
          <ul className={isDark ? "dark-menu menu" : "menu"}>
            {(
              <li>
                <a href="#skills">Skills</a>
              </li>
            )}
            {(
              <li>
                <a href="#Proficiency">Proficiency</a>
              </li>
            )}
            {(
              <li>
                <a href="#Education">Education</a>
              </li>
            )}
            {(
              <li>
                <a href="#Projects">Projects</a>
              </li>
            )}
            {(
              <li>
                <a href="#about">About</a>
              </li>
            )}
            {(
              <li>
                <a href="#" onClick={() => setShowContact(true)}>
                  Contact Me
                </a>
              </li>
            )}
            {(
              <li>
                <ToggleSwitch />
              </li>
            )}
          </ul>
        </header>
      </Headroom>

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
                      href="https://t.me/afafii13"
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
    </>
  );
}

export default Header;
