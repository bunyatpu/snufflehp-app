
const db_snufflehp = require('../config/db/db_snufflehp');
const Sequelize = require('sequelize');
//const UserModel = require('./UserModel');


const UserAddressModel = db_snufflehp.define('user_address', {
      id: {
          type: Sequelize.INTEGER,
          primaryKey: true,
          autoIncrement: true
      },
      user_id: {type:Sequelize.INTEGER},
      addr: {type: {type:Sequelize.STRING(200)}},
      sub_district: {type: {type:Sequelize.STRING(200)}},
      district: {type: {type:Sequelize.STRING(200)}},
      province: {type: {type:Sequelize.STRING(200)}},
      postcode: {type: {type:Sequelize.STRING(50)}},
      status: {type:Sequelize.INTEGER},
      create_date	: {type:Sequelize.DATE}
      
  }, {
    tableName: 'user_address',
    underscored:true
  });



module.exports = UserAddressModel;





