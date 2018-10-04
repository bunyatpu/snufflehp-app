import actionType from '../constants'
//import _ from 'lodash'

const sumTotal = (list) => {

  return list.reduce((sum,item)=>{
    //console.log(sum,item)
    const amtNow = (item.status === 1)?parseInt(item.amount,10):0
    return sum + amtNow
  },0)
}

const init = { 
  productAll:[],
  productNewBook:[],
  productNewOther:[],
  detail:{},
  cartOrders:{
    amtTotal:0,
    list:[]
  }
}

const ProductsReducer =  (state = init, action) => {

  const jsonStr = JSON.stringify(Object.assign({},state))
  let newStage = JSON.parse(jsonStr)

  switch(action.type) {

    case actionType.DELETE_ORDER_PRODUCT:

      //find in dex 

      const index = state.cartOrders.list.findIndex((i)=>{
        return i.id === action.payload.id
      })

      //console.log('index2',index)

      newStage.cartOrders.list.splice(index,1)
      newStage.cartOrders.amtTotal = sumTotal(newStage.cartOrders.list)


      return newStage

    case actionType.CART_LOAD:

      newStage.cartOrders.amtTotal = sumTotal(action.payload);
      newStage.cartOrders.list = action.payload;
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

      newStage.cartOrders.amtTotal = sumTotal(newStage.cartOrders.list);

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