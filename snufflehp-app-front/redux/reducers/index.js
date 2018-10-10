import { combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'
import { reducer as responsiveReducer } from 'react-responsive-redux'
import AuthReducer from "./AuthReducer";
import ProductsReducer from "./ProductsReducer"
import StatusTagReducer from './StatusTagReducer'
import UtilityReducer from "./UtilityReducer";

const reducer = combineReducers({
  products:ProductsReducer,
  StatusTagReducer,
  auth:AuthReducer,
  UtilityReducer,
  form: formReducer,
  responsive: responsiveReducer
})

export default reducer