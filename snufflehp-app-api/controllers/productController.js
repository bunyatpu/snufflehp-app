const Sequelize = require('sequelize');
const Op = Sequelize.Op;
const ProductsModel = require('../models/Products')
const ProductDetailModel = require('../models/ProductDetail')


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
    res.json({status:true,product:model})
  })
  .catch((err)=>{
    console.log('err',err)
    res.json({status:false,message:err})
  })



}



module.exports = {
  loadAllProducts,
  loadNewProducts,
  loadNewOther,
  loadProductDetail
}