import React, { Component } from 'react';
import './Filter.css';

class Filter extends Component {
  render() {
    return (
      <label className="contactsLable">

        Finde contacts by name
        <input
          name="filter"
          onChange={this.props.onHandleChange}
          value={this.props.filter}
        />
      </label>
    );
  }
}

export default Filter;
