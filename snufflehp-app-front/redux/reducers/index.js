import { combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'
import AuthReducer from "./AuthReducer";
import ProductsReducer from "./ProductsReducer"

const reducer = combineReducers({
  products:ProductsReducer,
  auth:AuthReducer,
  form: formReducer
})

export default reducer