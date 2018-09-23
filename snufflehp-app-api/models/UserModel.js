
const db_snufflehp = require('../config/db/db_snufflehp');
const UserAddressModel = require('./UserAddressModel')

const Sequelize = require('sequelize');
const UserModel = db_snufflehp.define('users', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    username: {type: {type:Sequelize.STRING(255)}},
    password:{type: {type:Sequelize.STRING(255)}},
    email: {type:Sequelize.STRING(200)},
    regis_date: {type:Sequelize.DATE},
    status:{type:Sequelize.INTEGER},
    verify_email:{type:Sequelize.INTEGER},
    tel:{type:Sequelize.STRING(50)},
    avatar_path:{type:Sequelize.STRING(200)}
}, {
  tableName: 'users',
  underscored:true
});

UserModel.hasOne(UserAddressModel)
UserAddressModel.belongsTo(UserModel)

module.exports = UserModel;





