import React from "react";
import "./Contact.css";

const Contact = () => {
  return (
    <div className="contact">
      <h2>Contact</h2>
      <p>If you’d like to connect, feel free to reach out via email or social media.</p>
      
      <div className="contact-details">
        <p><strong>Email:</strong> <a href="mailto:surendarmou@gmail.com">surendarmou@gmail.com</a></p>
        <p><strong>Phone:</strong> <a href="tel:+19784898536">+1 (978) 489-8536</a></p>
        <p><strong>GitHub:</strong> <a href="https://github.com/Surendar001" target="_blank" rel="noopener noreferrer">github.com/Surendar001</a></p>
        <p><strong>LinkedIn:</strong> <a href="www.linkedin.com/in/surendar-mourougan-199a711a4" target="_blank" rel="noopener noreferrer">linkedin.com/in/surendarmourougan</a></p>
      </div>
      
      <div className="contact-options">
        <h3>Connect with Me</h3>
        <p>For quick responses, feel free to reach out via:</p>
        <ul>
          <li><a href="https://wa.me/1234567890" target="_blank" rel="noopener noreferrer">WhatsApp</a></li>
          <li><a href="https://t.me/yourtelegramhandle" target="_blank" rel="noopener noreferrer">Telegram</a></li>
          <li><a href="https://twitter.com/yourtwitterhandle" target="_blank" rel="noopener noreferrer">Twitter</a></li>
        </ul>
      </div>
    </div>
  );
};

export default Contact;