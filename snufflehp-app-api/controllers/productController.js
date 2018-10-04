const Sequelize = require('sequelize');
const Op = Sequelize.Op;
const ProductsModel = require('../models/Products')
const ProductDetailModel = require('../models/ProductDetail')
const CartOrders = require('../models/CartOrders')


const loadAllProducts = (req,res) => {

  ProductsModel.findAll({
    where:{status:1}
  }).then(products => {

    res.json({status:true,products:products})

  }).catch((err)=>{
    res.json({status:false,message:err})
  })

}

const loadNewProducts = (req,res) => {

  let { cond } = req.body;

  if(cond !== undefined){
    where = JSON.parse(cond)
  }

  ProductsModel.findAll({
    where:{status:1,...where},
    order:[['id','DESC']],
    limit:4
  }).then(products => {

    res.json({status:true,products:products})

  }).catch((err)=>{
    res.json({status:false,message:err})
  })

}

const loadNewOther = (req,res) => {

  let { cond } = req.body;


  ProductsModel.findAll({
    where:{
      status:1,
      category_id:{
        [Op.ne]:1
      }
    },
    order:[['id','DESC']],
    limit:4
  }).then(products => {

    res.json({status:true,products:products})

  }).catch((err)=>{
    res.json({status:false,message:err})
  })

}

const loadProductDetail = (req,res) => {

  let params = req.body;

  ProductDetailModel.findOne({
    where:{product_id:params.id},
    include:[ ProductsModel ]
  }).then((model)=>{

    //console.log('models=>',models)
    // setTimeout(()=>{
    //   res.json({status:true,product:model})
    // },4000)

    res.json({status:true,product:model})
  })
  .catch((err)=>{
    console.log('err',err)
    res.json({status:false,message:err})
  })



}

const updateOrderCart = (req, res) => {

  let {params} = req.body;
  const { id } = req.user;
  //console.log('params=>',params)
  let model = JSON.parse(params);
  //console.log('model=>',model)
  model.user_id = id;

  CartOrders.findOrCreate({
    where:{
      user_id: model.user_id,
      product_id: model.product_id
    },
    defaults:{...model,create_date:new Date().toISOString().slice(0, 10)}
  })
  .then((carts)=>{

    const resCart = carts[0]
    const created = carts[1];

    if(!created){

      //update
      resCart.update(model)
      .then(() => {
       
        res.json({status:true,msg:'succ',model})
       
      })

    }else{

      res.json({status:true,msg:'succ',model})
  
    }
    
  })
  .catch((error)=>{
   
    res.json({status:false,msg:error})
    
  })

}

const loadCartOrder = (req, res) => {

  //const { product_id } = req.body;
  const { id } = req.user;

  //console.log('user id',id)

  CartOrders.findAll({
    include:[ProductsModel],
    where:{user_id:id}
  }).then(carts => {

    res.json({status:true,carts})

  }).catch((err)=>{
    res.json({status:false,message:err})
  })

}

const deleteOrderCart = (req, res) => {

  let { params } = req.body;
  //const { id } = req.user;
  //console.log('params=>',params)
  let obj = JSON.parse(params);
  //console.log('obj=>',obj)
  //model.user_id = id;

  CartOrders.findOne({
    where:{id:obj.id}
  }).then((model)=>{

    //console.log(model)

    model.destroy({ force: true }).then((succ)=>{

      res.json({status:true,succ})

    }).catch((error)=>{
      res.json({status:false,message:error})
    })

   
  })
  .catch((error)=>{
    console.log('err',error)
    res.json({status:false,message:error})
  })

  

}



module.exports = {
  loadAllProducts,
  loadNewProducts,
  loadNewOther,
  loadProductDetail,
  updateOrderCart,
  loadCartOrder,
  deleteOrderCart
}