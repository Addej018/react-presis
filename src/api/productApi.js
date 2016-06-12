
let products = [
    { id: 1, name: 'EM 16 Solhatt Blå/Gul', size: 'L' },
    { id: 2, name: 'EM 16 Sweden W T-Shirt', size: 'M' },
    { id: 3, name: 'EM 16 Sweden W T-Shirt', size: 'S' },
    { id: 4, name: 'EM 16 Sweden Linne', size: 'XL' }
];

export function getProducts() {
    return products;
}

export function addProduct(product) {
    product.id = products.length +1;
    products.push(product);
}

