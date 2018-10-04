import actionType from '../constants'
//import _ from 'lodash'
const init = {
  dialogShowGotoLogin:false,
  confirmDelete:false,
  itemPrepareDel:{}
}

const UtilityReducer =  (state = init, action) => {

  let newStage = Object.assign({},state)

  //console.log('action',action)

  switch(action.type) {

    case actionType.TOGGLE_DIALOG_GOTO_SIGIN:

      newStage.dialogShowGotoLogin = action.payload
      return newStage

    case actionType.TOGGLE_SHOW_CONFIRM_DELETE:
      //console.log('action.payload',action.payload)
      newStage.confirmDelete = action.payload.show
      newStage.itemPrepareDel = action.payload.item

      return newStage
    default:
      return state
  }
}

export default UtilityReducer;