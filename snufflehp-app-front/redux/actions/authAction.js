import 'isomorphic-unfetch'
//import { getApi } from "../../config";
import { getApi } from "../../components/commons/utility/getApi";
import { setCookie,removeCookie } from '../../components/commons/utility/cookie'
import actionType from '../constants'
// import getConfig from 'next/config'
// const { publicRuntimeConfig:{API_URL} } = getConfig()
//const { API_URL } = publicRuntimeConfig

const signupAction = (datas) =>{
  return async (dispatch) =>{

    let res = {status:true}

    try {

      const { API_URL } = getApi();

      const raw = await fetch(`${API_URL}/auth/signup`, {
        method: 'POST',
        headers: { 
          'Content-Type':'application/x-www-form-urlencoded'
        },
        body: `username=${datas.username}&password=${datas.password}&email=${datas.email}`
      })
  
      res = await raw.json()
      
    } catch (error) {
      //console.log('error',error.message)
      res.status = false;
      res.msg = error.message

    }

    return res;

  }
}


const signinAction = (datas) =>{

  //console.log('datas',datas)
  return async (dispatch) =>{
    //console.log('indispath')
    let res = {status:true}

    try {

      const { API_URL } = getApi();

      //console.log('API_URL',API_URL)
      const raw = await fetch(`${API_URL}/auth/signin`, {
        method: 'POST',
        headers: { 
          'Content-Type':'application/x-www-form-urlencoded'
        },
        body: `email=${datas.email}&password=${datas.password}`
      })
  
      res = await raw.json()

      //console.log('res',res)

      //set cookie and localstorage
      if(res.status){


        setCookie('token', res.token);
        //localStorage.setItem('auth', JSON.stringify(model))

      }

      //return res;

      //--
      
    } catch (error) {
      //console.log('error',error.message)
      res.status = false;
      res.msg = error.message

    }

    return res;

  }
}

const logoutAction = () => {

  return async (dispatch) => {

    dispatch({
      type:actionType.LOGIN_CLEAR
    })

    removeCookie('token');

  }
}


export {
  signupAction,
  signinAction,
  logoutAction
}