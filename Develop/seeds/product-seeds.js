const { Product } = require('../models');

const productData = [
  {
    product_name: 'Plain T-Shirt',
    price: 34.99,
    stock: 14,
    category_id: 1,
  },
  {
    product_name: 'Running Sneakers',
    price: 100.0,
    stock: 25,
    category_id: 5,
  },
  {
    product_name: 'Branded Baseball Hat',
    price: 32.99,
    stock: 12,
    category_id: 4,
  },
  {
    product_name: 'Top 40 Song Compilation Vinyl Record',
    price: 12.99,
    stock: 50,
    category_id: 3,
  },
  {
    product_name: 'Cargo Jeans',
    price: 59.909,
    stock: 52,
    category_id: 2,
  },
];

const seedProducts = () => Product.bulkCreate(productData);

module.exports = seedProducts;
