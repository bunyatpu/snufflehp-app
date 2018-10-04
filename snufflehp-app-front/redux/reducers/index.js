import { combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'
import AuthReducer from "./AuthReducer";
import ProductsReducer from "./ProductsReducer"
import StatusTagReducer from './StatusTagReducer'
import UtilityReducer from "./UtilityReducer";

const reducer = combineReducers({
  products:ProductsReducer,
  StatusTagReducer,
  auth:AuthReducer,
  UtilityReducer,
  form: formReducer
})

export default reducer