import * as React from 'react';
import ProductTable from './ProductTable';
import ProductForm from './ProductForm';
import * as productApi from '../api/productApi';
import {product} from '../api/product';
import * as styles from './base.css';


interface State {
  products:product []
}

export default class ProductListingPage extends React.Component<any,State> {
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
      <div className={styles.container}>
        <h1>Products</h1>
        <ProductTable products={this.state.products} />
        <ProductForm handleSubmit={(product) => this.handleSubmit(product) } />
      </div>
    )
  }
}

