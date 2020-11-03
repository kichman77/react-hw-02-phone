import React, { Component } from 'react';
import './Filter.css'

class Filter extends Component {
  render() {
    return (
      <label>
        <input name="filter" onChange={this.props.onHandleChange} value={this.props.filter}/>
      </label>
    );
  }
}

export default Filter;