import React, { Component } from 'react';
import * as productApi from '../api/productApi';


export default class ProductListingPage extends Component {
  constructor(props) {
    super(props);
    // Initial state
    this.state = {}
  }

  render() {
    return (
      <div>
        <h1>Products</h1>
      </div>
    )
  }
}

