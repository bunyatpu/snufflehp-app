import 'isomorphic-unfetch'
import actType from "../constants";

const showDialogGotoSignin = () =>{

  return  (dispatch)=>{

    dispatch({
      type:actType.TOGGLE_DIALOG_GOTO_SIGIN,
      payload:true
    })

  }
}

const closeDialogGotoSignin = () =>{

  return  (dispatch)=>{

    dispatch({
      type:actType.TOGGLE_DIALOG_GOTO_SIGIN,
      payload:false
    })

  }
}

const showConfirmDelete = (item) =>{

  //console.log('showConfirmDelete-->',item)
  return  (dispatch)=>{
    //console.log('dispatch')
    dispatch({
      type:actType.TOGGLE_SHOW_CONFIRM_DELETE,
      payload:{show:true,item}
    })

  }
}

const closeConfirmDelete = () =>{

  return  (dispatch)=>{

    dispatch({
      type:actType.TOGGLE_SHOW_CONFIRM_DELETE,
      payload:{show:false,item:{}}
    })

  }
}



export {
  showDialogGotoSignin,
  closeDialogGotoSignin,
  showConfirmDelete,
  closeConfirmDelete
}