import * as React from 'react';
import {product} from '../api/product';
import * as styles from './base.css';

interface State {
    product: product;
}

export default class ProductForm extends React.Component<any,State> {

    constructor(props) {
        super(props);

        this.state = {
            product: {}
        }
    }

    handleProductChange(newValue) {
        const product = Object.assign({}, this.state.product, newValue);
        this.setState({ product });
    }
    handleSubmit(event) {
        event.preventDefault();
        
        this.props.handleSubmit(this.state.product);
    }
    render() {
        return (
            <form onSubmit={(e) => this.handleSubmit(e) } className={styles.form}>
                <label>
                   <span> Product name </span>
                    <input
                        type='text'
                        value={this.state.product.name}
                        onChange={(e) => this.handleProductChange({ name: (e.target as HTMLInputElement).value }) }
                        />
                </label>
                <label>
                    Product size
                    <input
                        type='text'
                        value={this.state.product.size}
                        onChange={(e) => this.handleProductChange({size: (e.target as HTMLInputElement).value}) }
                        />
                </label>
                <input
                    type='submit'
                    value='Lägg till product'
                    />
            </form>
        )
    }
}