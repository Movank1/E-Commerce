// import models
const Product = require('./Product');
const Category = require('./Category');
const Tag = require('./Tag');
const ProductTag = require('./ProductTag');

// Products belongsTo Category
////** */
// Products belongsTo Category
Product.belongsTo(Category, {
  foreignKey: 'category_id',
  onDelete: 'CASCADE',
});

// Define the associations between the Product, Category, and Tag models using Sequelize

// Product belongs to Category, and Category has many Product models. This means that a product 
// can only belong to one category, but a category can have multiple products.

// Products belongsTo Category
Product.belongsTo(Category, {
  foreignKey: 'category_id',
  onDelete: 'CASCADE',
});

// Categories have many Products
Category.hasMany(Product, {
  foreignKey: 'category_id',
});

// Product belongs to many Tag models, and Tag belongs to many Product models. 
// This association allows products to have multiple tags and tags to have many products.

// Products belongToMany Tags (through ProductTag)
Product.belongsToMany(Tag, {
  through: ProductTag,

  foreignKey: 'product_id',
});

// Tags belongToMany Products (through ProductTag)
Tag.belongsToMany(Product, {
  through: ProductTag,
  // as: 'product_tags',
  foreignKey: 'tag_id',
});

module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};
