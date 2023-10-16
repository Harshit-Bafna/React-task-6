// Contact.js

import React from 'react';
import './Contact.css';
import emailjs from 'emailjs-com';

// Your EmailJS user ID
const EMAILJS_USER_ID = 'Ci3ovFHn6RV1DD8G0';
const SERVICE_ID = 'service_xy5fxgc';
const TEMPLATE_ID = 'template_ik0f8br';

function sendEmail(e) {
  e.preventDefault();

  emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, e.target, EMAILJS_USER_ID)
    .then((result) => {
      console.log('Email sent successfully:', result.text);
    }, (error) => {
      console.error('Email sending failed:', error.text);
    });

  e.target.reset();
}

const Contact = () => {
  return (
    <section className="contact">
      <div className="contact-container">
        <h2 className="section-title">Contact</h2>
        <form className="contact-form" onSubmit={sendEmail}>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input type="text" id="name" name="name" required />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="email" required />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea id="message" name="message" rows="4" required />
          </div>
          <button type="submit" className="submit-button">Submit</button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
