import React from 'react';
import styles from '../styles/References.module.css';

const References = () => {
  return (
    <div className={styles.references}>
      <h2 className={styles.heading}>Referencias</h2>
      <div className={styles.referenceList}>
        <div className={styles.reference}>
          <span className={styles.name}>Víctor Sepúlveda</span>
          <span className={styles.phoneNumber}>3185241401</span>
        </div>
        <div className={styles.reference}>
          <span className={styles.name}>Celene Marín</span>
          <span className={styles.phoneNumber}>3007901923</span>
        </div>
      </div>
    </div>
  );
};

export default References;
