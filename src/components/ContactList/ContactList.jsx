import React from 'react';
import ContactItem from '../ContactItem/ContactItem';
import styles from './ContactList.module.css'

function ContactList({ contacts, onDeleteContact }) {
  return (
    <ul className={styles.ul}>
      {contacts.map(({ id, name, number }) => (
        <ContactItem
          key={id}
          id={id}
          name={name}
          number={number}
          onDelete={onDeleteContact}
        />
      ))}
    </ul>
  );
}

export default ContactList;
