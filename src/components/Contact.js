import React from 'react';
import styles from '../styles/Contact.module.css';

const Contact = () => {
  return (
    <div className={styles.contact}>
      <h2 className={styles.heading}>Contacto</h2>

      <div className={styles.contactInfo}>
        <h4 className={styles.subHeading}>Quieres trabajar conmigo</h4>
        <p className={styles.paragraph}>
          Teléfono: <strong>310 5290842</strong>
        </p>
        <p className={styles.paragraph}>
          Email: <strong>oscargoez11@gmail.com</strong>
        </p>
        <p className={styles.paragraph}>
          Linkedin: <strong>www.linkedin.com/in/oscar-goez-henao</strong>
        </p>
      </div>
    </div>
  );
};

export default Contact;
