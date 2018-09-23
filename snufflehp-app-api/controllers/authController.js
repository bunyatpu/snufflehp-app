const UserModel = require('../models/UserModel')
const bcrypt   = require('bcrypt-nodejs');


const addUser = (req,res) => {

  const { username,password,email } = req.user;

  //console.log('user->',username,password,email);

  const hashPass = bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);

  // res.json({ username,password,email })

  const newUesr = new UserModel({
    username,
    password:hashPass,
    email,
    regis_date:new Date().toISOString().replace(/T/, ' ').replace(/\..+/, '')
  })

  newUesr.save().then(()=>{
    
    //return done(null, { username,password,email })

    res.json({ status:true,username,email })

  }).catch((error)=>{

    console.log('error',error)
    //return done(null, false, { message: error });
    res.json({ status:false,message: error })
  })

}


module.exports = {
  addUser
}