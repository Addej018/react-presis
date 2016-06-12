import React, { Component } from 'react';
import ProductTable from './ProductTable';
import ProductForm from './ProductForm';
import * as productApi from '../api/productApi';


export default class ProductListingPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      products: []
    }
  }

  handleSubmit(product) {
    productApi.addProduct(product);
    const products = productApi.getProducts();
    this.setState({ products });
  }

  componentDidMount() {
    const products = productApi.getProducts();
    this.setState({ products });
  }


  render() {
    return (
      <div>
        <h1>Products</h1>
        <ProductTable products={this.state.products} />
        <ProductForm handleSubmit={(product) => this.handleSubmit(product) } />
      </div>
    )
  }
}

