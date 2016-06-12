import React from 'react';


export default class ProductForm extends React.Component {

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
        this.setState({ product: {} })
    }
    render() {
        return (
            <form onSubmit={(e) => this.handleSubmit(e) }>
                <div>
                    Product name
                    <input
                        type='text'
                        value={this.state.product.name}
                        onChange={(e) => this.handleProductChange({ name: e.target.value }) }
                        />
                </div>
                <div>
                    Product size
                    <input
                        type='text'
                        value={this.state.product.size}
                        onChange={(e) => this.handleProductChange({ size: e.target.value }) }
                        />
                </div>
                <input
                    type='submit'
                    value='Lägg till product'
                    />
            </form>
        )
    }
}


ProductForm.propTypes = {
    handleSubmit: React.PropTypes.func.isRequired
};
