import React from 'react';
import './Contact.css';  // Importamos el archivo CSS separado

const Contact = () => {
  return (
    <div className="contact-section">
      <div className="form-container">
        <form className="contact-form">
          <label htmlFor="name">Name</label>
          <input type="text" id="name" name="name" placeholder="Name" />
          
          <label htmlFor="surname">Surname</label>
          <input type="text" id="surname" name="surname" placeholder="Surname" />
          
          <label htmlFor="email">Email</label>
          <input type="email" id="email" name="email" placeholder="Email" />
          
          <label htmlFor="message">Message</label>
          <textarea id="message" name="message" placeholder="Message"></textarea>
          
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default Contact;

