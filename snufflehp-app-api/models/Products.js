
const db_snufflehp = require('../config/db/db_snufflehp');
const Sequelize = require('sequelize');
const ProductDetail = require('./ProductDetail')


const Products = db_snufflehp.define('products', {
      id: {
          type: Sequelize.INTEGER,
          primaryKey: true,
          autoIncrement: true
      },
      category_id : {type:Sequelize.INTEGER},
      name : {type: {type:Sequelize.STRING(255)}},
      author : {type: {type:Sequelize.STRING(200)}},
      description : {type: {type:Sequelize.STRING(255)}},
      cover_path : {type: {type:Sequelize.STRING(50)}},
      price : {type:Sequelize.FLOAT(11,4)},
      amount : {type:Sequelize.FLOAT(11,4)},
      status_sale : {type: {type:Sequelize.STRING(50)}},
      status : {type:Sequelize.TINYINT},
      create_date : {type:Sequelize.DATE}
      
  }, {
    tableName: 'products',
    underscored:true
  });


Products.hasOne(ProductDetail)
ProductDetail.belongsTo(Products)


module.exports = Products;










