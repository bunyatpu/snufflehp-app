import 'isomorphic-unfetch'
import actType from "../constants";
import cookies from 'next-cookies'
//import { API_URL } from "../../config";
// import getConfig from 'next/config'
// const { publicRuntimeConfig } = getConfig()
// const { API_URL } = publicRuntimeConfig
import { getApi } from "../../components/commons/utility/getApi";
import { getCookie } from "../../components/commons/utility/cookie";
import { reset } from 'redux-form';


const loadUserInfo = (token) =>{

  return async (dispatch)=>{

    let res = {status:true}

    //--
    try {

      //console.log('API_URL', API_URL)
      const { API_URL } = getApi();

      const raw = await fetch(`${API_URL}/user/load_user`, {
        method: 'POST',
        headers: { 
          'Content-Type':'application/x-www-form-urlencoded',
          'Authorization': `Bearer ${token}`
        }
      })
  
      res = await raw.json()

      //console.log('res',res)
      if(res.status){
        dispatch({
          type:actType.LOGIN_ADD,
          payload:res.user
        })
      }else{
        console.log('error',res.msg)
      }
     


      
    } catch (error) {

      console.log('error',error.message)
     
    }

  }

}

const updateUser = (user) => {

  return async (dispatch) => {

    let res = {status:true}
    const token = getCookie('token');

    //--
    try {

     
      let formData = new FormData();
      for(let k in user){
        formData.append(k,user[k])
      }
      

      const { API_URL } = getApi();

      const raw = await fetch(`${API_URL}/user/update_user`, {
        method: 'POST',
        headers: { 
          // 'Content-Type':'application/x-www-form-urlencoded',
          'Authorization': `Bearer ${token}`
        },
        //body:`user=${JSON.stringify(user)}`
        body:formData
      })
  
      res = await raw.json()

      //console.log('res',res)

      if(res.status){
        user.avatar_path = res.model.avatar_path
        dispatch({
          type:actType.LOGIN_ADD,
          payload:user
        })
      }else{
        console.log('error1',res.msg)
        res.status = false;
        res.msg = res.msg;
      }
 
    } catch (error) {

      console.log('error2',error.message)
      res.status = false;
      res.msg = error.message;
     
    }

    return res;

  }
}

const updatePassword = (passObj) => {

  return async (dispatch)=>{

    let res = {status:true}
    const token = getCookie('token');

    //--
    try {

      //console.log('user',user)

      //console.log('API_URL', API_URL)
      const { API_URL } = getApi();

      const raw = await fetch(`${API_URL}/user/update_password`, {
        method: 'POST',
        headers: { 
          'Content-Type':'application/x-www-form-urlencoded',
          'Authorization': `Bearer ${token}`
        },
        body:`passObj=${JSON.stringify(passObj)}`
      })
  
      res = await raw.json()

      if(res.status){
        dispatch(reset('formPassword'));
      }

      

 
    } catch (error) {

      console.log('error',error.message)
      res.status = false;
      res.error = error.message;
     
    }

    return res;

  }

}

const updateAddress = (addObj) => {

  return async (dispatch) => {

    let res = {status:true}
    const token = getCookie('token');

    try {

      const { API_URL } = getApi();

      const raw = await fetch(`${API_URL}/user/update_address`, {
        method: 'POST',
        headers: { 
          'Content-Type':'application/x-www-form-urlencoded',
          'Authorization': `Bearer ${token}`
        },
        body:`addrObj=${JSON.stringify(addObj)}`
      })
  
      res = await raw.json()

      if(res.status){
        dispatch({
          type:actType.UPDATE_ADDR,
          payload:addObj
        })
      }

      

 
    } catch (error) {

      console.log('error',error.message)
      res.status = false;
      res.error = error.message;
     
    }

    return res;


    


  }

}

export {
  loadUserInfo,
  updateUser,
  updatePassword,
  updateAddress
}