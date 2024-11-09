import React from 'react';
import styles from './ContactItem.module.css';

function ContactItem({ id, name, number, onDelete }) {
  return (
    <li className={styles.buttonDelete}>
      {name}: {number}
      <button onClick={() => onDelete(id)}>Delete</button>
    </li>
  );
}

export default ContactItem;
