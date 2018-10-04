
const db_snufflehp = require('../config/db/db_snufflehp');
const Sequelize = require('sequelize');


const CartOrders = db_snufflehp.define('cart_order', {
      id: {
          type: Sequelize.INTEGER,
          primaryKey: true,
          autoIncrement: true
      },
      user_id : {type:Sequelize.INTEGER},
      product_id : {type:Sequelize.INTEGER},
      amount : {type: {type:Sequelize.FLOAT(11,4)}},
      status : {type:Sequelize.TINYINT},
      create_date : {type:Sequelize.DATE}
      
  }, {
    tableName: 'cart_order',
    underscored:true
  });



module.exports = CartOrders;
