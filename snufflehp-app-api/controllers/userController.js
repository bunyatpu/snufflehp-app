const Sequelize = require('sequelize');
const Op = Sequelize.Op;
const bcrypt   = require('bcrypt-nodejs');
var fs = require('fs');
var path = require('path');

const UserModel = require('../models/UserModel')
const UserAddressModel = require('../models/UserAddressModel')



const loadUserById = (req, res) => {

  //console.log('user-->',req.user)
  const { id } = req.user;

  UserModel.findOne({
    where:{id:id},
    include:[UserAddressModel]
  }).then(user => {

    //console.log('user',user.dataValues)
 
    res.json({
      
      status:true,
      user:{
        id:user.id,
        username:user.username,
        email:user.email,
        verify_email:user.verify_email,
        tel:user.tel,
        avatar_path:user.avatar_path,
        address:user.user_address
      }
    })

  }).catch((err)=>{
    res.json({status:false,msg:err})
  })

  

} 

const updateUser = (req, res) => {

  // let { user } = req.body;
  // let params = JSON.parse(user)
  let params = req.body;
  //console.log('params',params)

  const { email,username,id } = params
 
  // console.log('req user',req.user)
  const avatar = req.files[0];

  //console.log('avatar',avatar)
  if(avatar !== undefined){
    params.avatar_path = avatar.filename
  }

  

  //checking
  UserModel.findOne({ 
    where:{
      id:{
        [Op.ne]:id
      },
      [Op.or]: [{email}, {username}]
      
    } 
  }).then((refUser)=>{
    
    const user = refUser;
    //const hashPass = bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);

    //console.log('user',user)

    if(user !== null){

      if(email === user.email){

        throw {message:'Email is in use'}
        //return done(null, false, { message: "Email is in use" });
      }else if(username === user.username){

        throw {message:'Username is in use'}
        //return done(null, false, { message: "Username is in use" });
      }else{
        throw {message:'out of case'}
      }

    }else{

      

      
      UserModel.findOrCreate({
        where:{
          id: params.id
        },
        defaults:params
      })
      .then((fiction)=>{
    
        const resUser = fiction[0]
        const created = fiction[1];

        //console.log('===>',resUser.avatar_path)

        
      
        if(!created){

          //ลบรูปเดิม
          if(resUser && resUser.avatar_path !== ''){
         
            var filePath = path.resolve(__dirname,'..','public','images','avatars',resUser.avatar_path);
            fs.unlinkSync(filePath);
      
          }
          //update
          resUser.update(params)
          .then(() => {
           
            res.json({status:true,msg:'succ',model:params})
           
          })
    
        }else{
    
          res.json({status:true,msg:'succ',model:params})
      
        }
        
      })
      .catch((error)=>{
       
        res.json({status:false,msg:error})
        
      })

    }

  }).catch((err)=>{
    console.log('1----err',err.message)
    res.json({status:false,msg:err})
  })

  //



  



}

const updatePassword = (req, res) => {


  const { id } = req.user;
  let { passObj } = req.body;
  let params = JSON.parse(passObj)

  const { new_password,old_password } = params

  

  UserModel.findById(id)
  .then(user => {

    const oldPass = bcrypt.hashSync(old_password, bcrypt.genSaltSync(8), null);
    //checking
    //console.log('old_password',oldPass,' !== ',user.password)

    if(!bcrypt.compareSync(old_password, user.password)){
      res.json({status:false,msg:'password ไม่ถูกต้อง'})
    }else{

      const hashPass = bcrypt.hashSync(new_password, bcrypt.genSaltSync(8), null);

      user.password = hashPass;
      user.save().then(() => {
        res.json({status:true,msg:'succ'})
      }).catch((err)=>{
        res.json({status:false,msg:err})
      })

    }
  
    

    
    //--

    

  }).catch((err)=>{
    res.json({status:false,msg:err})
  })

}

const updateAddress = (req, res) => {


  const { id } = req.user;
  let { addrObj } = req.body;
  let params = JSON.parse(addrObj)

 

  UserAddressModel.findOrCreate({
    where:{
      id: params.id
    },
    defaults:params
  })
  .then((fiction)=>{

    const resAddr = fiction[0]
    const created = fiction[1];

    //console.log('resUser',resUser,'created', created)
  
    if(!created){
      //update
      delete params.id;
      params.create_date = new Date().toISOString().slice(0, 10);

      //console.log('will update',params)

      resAddr.update(params)
      .then(() => {
       
        res.json({status:true,msg:'succ'})
       
      })

    }else{

      res.json({status:true,msg:'succ'})
  
    }
    
  })
  .catch((error)=>{
   
    res.json({status:false,msg:error})
    
  })

}


//


module.exports = {
  loadUserById,
  updateUser,
  updatePassword,
  updateAddress
}