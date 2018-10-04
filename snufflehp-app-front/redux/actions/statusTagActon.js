import 'isomorphic-unfetch'
import actType from "../constants";

const toggleStatus = () => {

  return (dispatch) => {

    dispatch({
      type:actType.TOGGLE_STATUS_TAG,
      payload:true
    })

    setTimeout(()=>{

      dispatch({
        type:actType.TOGGLE_STATUS_TAG,
        payload:false
      })

    },1000)

  }
}

export {
  toggleStatus
}