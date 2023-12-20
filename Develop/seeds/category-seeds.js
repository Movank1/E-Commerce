const { Category } = require('../models');

const categoryData = [
  {
    category_name: 'Shirts',
  },
  {
    category_name: 'Jeans',
  },
  {
    category_name: 'Song',
  },
  {
    category_name: 'Hats',
  },
  {
    category_name: 'Dresses',
  },
];

const seedCategories = () => Category.bulkCreate(categoryData);

module.exports = seedCategories;
