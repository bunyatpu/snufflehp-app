import actionType from '../constants'
//import _ from 'lodash'

const AuthReducer =  (state = {}, action) => {

  let newStage = Object.assign({},state)

  switch(action.type) {
    case actionType.UPDATE_ADDR:

      newStage.address = {...action.payload}

      console.log('newStage',newStage)

      return newStage
    case actionType.LOGIN_TOGGLE:
      //console.log('LOGIN_TOGGLE',action.payload)
      newStage.isLogin = action.payload

      return newStage;
    case actionType.LOGIN_ADD:
      //console.log('LOGIN_ADD',action.payload)
      // newStage.isLogin = action.payload.isAuth
      // newStage.user = action.payload.user
      // newStage.token = action.payload.token

      //console.log('action.payload',action.payload)

      newStage = {...action.payload}

      return newStage;
    case actionType.LOGIN_CLEAR:

    return {}

    default:
      return state
  }
}

export default AuthReducer;