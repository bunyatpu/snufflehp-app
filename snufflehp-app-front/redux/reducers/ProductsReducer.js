import actionType from '../constants'
//import _ from 'lodash'

const init = { 
  productAll:[],
  productNewBook:[],
  productNewOther:[],
  detail:{}
}

const ProductsReducer =  (state = init, action) => {

  let newStage = Object.assign({},state)

  switch(action.type) {
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