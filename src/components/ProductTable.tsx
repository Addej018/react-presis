import * as React from 'react';
import * as styles from './base.css';

const ProductRow = ({product}) => (
  <tr>
    <td>
      {product.id}
    </td>
    <td>
      {product.name}
    </td>
    <td>
      {product.size}
    </td>
  </tr>
);


const ProductTable = ({products}) => (
  <table className={styles.table}>
    <thead>
      <tr>
        <th>
          Id
        </th>
        <th>
          Name
        </th>
        <th>
          Size
        </th>
      </tr>
    </thead>
    <tbody>
      {products.map(product =>
        <ProductRow key={product.id} product={product} />
      ) }
    </tbody>
  </table>
)

export default ProductTable;