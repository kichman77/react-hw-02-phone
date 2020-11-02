import React, { Component } from 'react';
import PhoneBook from './PhoneBook/PhoneBook';
import { v4 as uuidv4 } from 'uuid';

class App extends Component {
  render() {
    return <PhoneBook />;
  }
}

export default App;
