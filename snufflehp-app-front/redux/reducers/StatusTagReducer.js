import actionType from '../constants'
//import _ from 'lodash'

const StatusTagReducer =  (state = {show:false}, action) => {

  let newStage = Object.assign({},state)

  switch(action.type) {

    case actionType.TOGGLE_STATUS_TAG:

      newStage.show = action.payload
      return newStage

   
    default:
      return state
  }
}

export default StatusTagReducer;