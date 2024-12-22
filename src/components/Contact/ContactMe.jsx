import React from "react";
import "./ContactMe.css";

const ContactMe = () => {
  return (
    <div className="contact-page">
      <h1 className="contact-title">Get in Touch</h1>
      <p className="contact-description">
        Feel free to reach out to me via social media or email. I look forward to connecting with you!
      </p>

      <div className="contact-options">
        <div className="contact-method">
          <h2>Email</h2>
          <p>
            <a href="mailto:yourname@example.com">yourname@example.com</a>
          </p>
        </div>

        <div className="social-media">
          <h2>Connect via Social Media</h2>
          <ul className="social-media-list">
            <li>
              <a href="https://www.linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-linkedin"></i> LinkedIn
              </a>
            </li>
            <li>
              <a href="https://twitter.com/yourhandle" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-twitter"></i> Twitter
              </a>
            </li>
            <li>
              <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-github"></i> GitHub
              </a>
            </li>
            <li>
              <a href="https://www.instagram.com/yourhandle" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-instagram"></i> Instagram
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ContactMe;
