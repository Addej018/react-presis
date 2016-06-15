import * as React from 'react';
import {product} from '../api/product';

interface State {
    product: product;
}

export default class ProductForm extends React.Component<any,State> {

    constructor(props) {
        super(props);
    }

    render() {
        return(
            <div></div>
        )
    }
}