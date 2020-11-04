import React from 'react';
import './ContactList.css'

const ContactList = ({ contacts, deleteContact }) => {
  return (
    <ul>
      {contacts.map(contact => (
        <li className="contactItem" key={contact.id}>
          {contact.name}
          {contact.number}
          <button className='btn-del' onClick={() => deleteContact(contact.id)} type="button">
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};

export default ContactList;
