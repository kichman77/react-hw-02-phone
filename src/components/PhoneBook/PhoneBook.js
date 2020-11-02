import React, { Component } from 'react';
import Form from '../Form/Form';
import ContactList from '../ContactList/ContactList';

class PhoneBook extends Component {
  state = {
    contacts: [   ],
    // filter: '',
    name: '',
    // number: ''
  };
  addContact = () => {
    this.setState(prev => ({
      contacts: prev.contacts,
    }));
  };

  render() {
    return (
      <>
        <h1 className="title">PhoneBook</h1>
        <Form />
        <h2 className="subtitle">Contacts</h2>
        <ul className="contactList">
          <ContactList />
        </ul>
      </>
    );
  }
}

export default PhoneBook;
