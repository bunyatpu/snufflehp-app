import actionType from '../constants'
//import _ from 'lodash'

const init = { 
  productAll:[],
  productNewBook:[],
  productNewOther:[],
  detail:{},
  cartOrders:{
    amtTotal:0,
    list:[],
    shipping:{
      typeSel:0,
      priceBase:[40,20,60],
      plusPacking:{
        book:10,
        other:5
      },
      dicut:false,
      bubble:false,
      defaultWeight:4000
    },
    summary:{
      showNormal:true,
      totalWeight:0,
      priceNow:[0,0,0],
      sumPlusPack:0.00,
      productPrice:0.00,
      shippingPrice:0.00,
      total:0.00
      
    }
  }
}

const countItem = (list) => {

  return list.reduce((sum,item)=>{
    //console.log(sum,item)
    const amtNow = (item.status === 1)?parseInt(item.amount,10):0
    return sum + amtNow
  },0)
}

const calSummary = (cartOrders) =>{

  let prodPrice = 0.00;
  let shippingPrice = 0.00;

  let sumBook = 0;
  let sumOther = 0;
  let sumPlusPack = 0.00;
  let priceNow = [...cartOrders.shipping.priceBase]
  let totalWeight = 0;
  let showNormal = true
  let typeSel = cartOrders.shipping.typeSel 
  
  

  cartOrders.list.forEach(item => {
    
    if( item.status === 1 ){
      prodPrice += parseFloat(item.amount * item.product.price)

      if(item.product.category_id === 1){
        sumBook += parseInt(item.amount,10)
      }else{
        sumOther += parseInt(item.amount,10)
      }

      if(item.product.weight !== undefined){
        totalWeight += (parseInt(item.product.weight,10) * item.amount)
      }
      
    }
    
  });

  
  //แสดง ประเภทการส่ง ตาม น้ำหนัก
  showNormal = (totalWeight > cartOrders.shipping.defaultWeight) ? true:false;

  if( typeSel !== 2 ){

    typeSel = ( showNormal ) ? 1:0;

  }
  //--

  //คำรวณราคาส่งเพิ่มตาม จำนวนหนักสือ
  if(sumBook > 0){
    sumPlusPack = ( (sumBook-1) * cartOrders.shipping.plusPacking.book) + ( sumOther * cartOrders.shipping.plusPacking.other)
  }else{
    sumPlusPack = ( (sumOther - 1) * cartOrders.shipping.plusPacking.other)
  }

 

  //--

  priceNow[0] += sumPlusPack
  priceNow[1] += sumPlusPack
  priceNow[2] += sumPlusPack
  shippingPrice = priceNow[typeSel]
  //--

  //console.log('cartOrders.shipping',cartOrders.shipping)
  //add shield package
  if(cartOrders.shipping.dicut){
    shippingPrice = shippingPrice + 16
  }

  if(cartOrders.shipping.bubble){
    shippingPrice = shippingPrice + 10
  }


  return {
    ...cartOrders,
    summary:{
      showNormal,
      totalWeight,
      priceNow,
      sumPlusPack,
      productPrice:prodPrice,
      shippingPrice:shippingPrice,
      total:prodPrice + shippingPrice
    },
    shipping:{...cartOrders.shipping, typeSel}
  }

}

const setPriceNow = (cartOrders) => {


  // const priceBase = cartOrders.shipping.priceBase
  // const 

  // return [
  //   (priceBase[0]+)
  // ]
 
}


const ProductsReducer =  (state = init, action) => {

  const jsonStr = JSON.stringify(Object.assign({},state))
  let newStage = JSON.parse(jsonStr)

  switch(action.type) {

    case actionType.TOGGLE_SHIELD_PACKAGE:

      newStage.cartOrders.shipping[action.payload.type] = !newStage.cartOrders.shipping[action.payload.type]
      newStage.cartOrders = calSummary(newStage.cartOrders)

      return newStage

    case actionType.UPDATE_SHIPPING_TYPE:
      //console.log('=>UPDATE_SHIPPING_TYPE',action.payload)
      newStage.cartOrders.shipping.typeSel = action.payload
      newStage.cartOrders = calSummary(newStage.cartOrders)

      return newStage

    case actionType.DELETE_ORDER_PRODUCT:

      //find in dex 

      const index = state.cartOrders.list.findIndex((i)=>{
        return i.id === action.payload.id
      })

      //console.log('index2',index)

      newStage.cartOrders.list.splice(index,1)
      newStage.cartOrders.amtTotal = countItem(newStage.cartOrders.list)
      newStage.cartOrders = calSummary(newStage.cartOrders)


      return newStage

    case actionType.CART_LOAD:

      newStage.cartOrders.amtTotal = countItem(action.payload);
      newStage.cartOrders.list = action.payload;
      newStage.cartOrders = calSummary(newStage.cartOrders)
      return newStage

    case actionType.CART_UPDATE:

      //newStage.detail = action.payload
      //console.log('payload',action.payload)
      const { product_id, user_id  } = action.payload

      let newItem = true;
      //update 
      newStage.cartOrders.list = state.cartOrders.list.map((item)=>{

        if(parseInt(item.product_id,10) ===  parseInt(product_id,10) && parseInt(item.user_id,10) === parseInt(user_id,10)){
          newItem = false;
          return {...item, ...action.payload };
        }

        return item
      })

      if(newItem){
        newStage.cartOrders.list.push(action.payload)
      }

      newStage.cartOrders.amtTotal = countItem(newStage.cartOrders.list);
      newStage.cartOrders = calSummary(newStage.cartOrders)
      //console.log('update newStage',newStage)

      return newStage

    case actionType.PRODUCT_LOAD_DETAIL:

      newStage.detail = action.payload
      return newStage

    case actionType.PRODUCT_LOAD_ALL:

      newStage.productAll = action.payload
      return newStage
    case actionType.PRODUCT_LOAD_NEW_BOOK:

      newStage.productNewBook = action.payload
      return newStage
    case actionType.PRODUCT_LOAD_NEW_OTHER:

      newStage.productNewOther = action.payload
      return newStage
    default:
      return state
  }
}

export default ProductsReducer;