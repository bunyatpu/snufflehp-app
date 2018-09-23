var config = require('./db.config');
var Sequelize = require('sequelize');
const db_snufflehp = new Sequelize(config.cfg_db_snufflehp, config.cfg_db_user, config.cfg_db_pwd, {
    host: config.cfg_db_host,
    dialect: 'mysql',
    logging: false,
    freezeTableName: true,
    operatorsAliases: false,
    pool: {
      max: config.cfg_MAX_POOL,
      min: config.cfg_MIN_POLL,
      idle: config.cfg_IDLE
    },
    define: {
      timestamps: false
    }
});

module.exports = db_snufflehp;