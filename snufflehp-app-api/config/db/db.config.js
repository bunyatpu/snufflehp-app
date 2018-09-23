/**
 * Created by adithep on 10/20/2017 AD.
 */
console.log('host',process.env.DB_HOST)

module.exports = {
  cfg_db_host: process.env.DB_HOST,
  cfg_db_user: process.env.DB_USER,
  cfg_db_pwd: process.env.DB_PASS,
  cfg_MAX_POOL: 10,
  cfg_MIN_POOL: 0,
  cfg_IDLE: 10000,
  cfg_db_snufflehp: "snufflehp",

  //** config additional parameter */
  cfg_bypass_db: false, //if true == not check paid status
}