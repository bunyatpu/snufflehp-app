
const db_snufflehp = require('../config/db/db_snufflehp');
const Sequelize = require('sequelize');


const ProductDetail = db_snufflehp.define('product_detail', {
      id: {
          type: Sequelize.INTEGER,
          primaryKey: true,
          autoIncrement: true
      },
      product_id : {type:Sequelize.INTEGER},
      detail : {type: {type:Sequelize.TEXT}},
      status : {type:Sequelize.TINYINT},
      create_date : {type:Sequelize.DATE}
      
  }, {
    tableName: 'product_detail',
    underscored:true
  });



module.exports = ProductDetail;
