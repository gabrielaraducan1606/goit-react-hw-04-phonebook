import React from 'react';
import styles from './Filter.module.css';

function Filter({ value, onChange }) {
  return (
    <div className={styles.filter}>
      <label className={styles.nameLabel}>
        Find contacts by name
        <input type="text" className={styles.input} value={value} onChange={onChange} />
      </label>
    </div>
  );
}

export default Filter;
