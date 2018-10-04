import 'isomorphic-unfetch'
//import { getApi } from "../../config";
import { getApi } from "../../components/commons/utility/getApi";
import { getCookie } from "../../components/commons/utility/cookie";
// import { setCookie,removeCookie } from '../../components/commons/utility/cookie'
import actionType from '../constants'


const loadAllProducts = () => {

  return async (dispatch) => {

    let res = {status:true}

    //--
    try {

      //console.log('API_URL', API_URL)
      const { API_URL } = getApi();

      const raw = await fetch(`${API_URL}/products/load_products_all`, {
        method: 'POST',
        headers: { 
          'Content-Type':'application/x-www-form-urlencoded'
        }
      })
  
      res = await raw.json()

      //console.log('res',res)
      if(res.status){
        dispatch({
          type:actionType.PRODUCT_LOAD_ALL,
          payload:res.products
        })
      }else{
        console.log('error',res.message)
      }
     


      
    } catch (error) {

      console.log('error',error.message)
     
    }

  }
}

const loadNewProducts = () => {

  return async (dispatch) => {

    let res = {status:true}

    //--
    try {

      //console.log('API_URL', API_URL)
      const { API_URL } = getApi();

      const raw = await fetch(`${API_URL}/products/load_products_new`, {
        method: 'POST',
        headers: { 
          'Content-Type':'application/x-www-form-urlencoded'
        },
        body:`cond=${JSON.stringify({category_id:1})}`
      })
  
      res = await raw.json()

      //console.log('res',res)
      if(res.status){
        dispatch({
          type:actionType.PRODUCT_LOAD_NEW_BOOK,
          payload:res.products
        })
      }else{
        console.log('error',res.message)
      }
     


      
    } catch (error) {

      console.log('error',error.message)
     
    }

  }
}

const loadNewOther = () => {

  return async (dispatch) => {

    let res = {status:true}

    //--
    try {

      //console.log('API_URL', API_URL)
      const { API_URL } = getApi();

      const raw = await fetch(`${API_URL}/products/load_other_new`, {
        method: 'POST',
        headers: { 
          'Content-Type':'application/x-www-form-urlencoded'
        }
      })
  
      res = await raw.json()

      //console.log('res',res)
      if(res.status){
        dispatch({
          type:actionType.PRODUCT_LOAD_NEW_OTHER,
          payload:res.products
        })
      }else{
        console.log('error',res.message)
      }
     


      
    } catch (error) {

      console.log('error',error.message)
     
    }

  }
}

const loadProductDetail = (id) => {

  return async (dispatch) => {

    let res = {status:true}

    //--
    try {

      //console.log('API_URL', API_URL)
      const { API_URL } = getApi();

      const raw = await fetch(`${API_URL}/products/load_product_detail`, {
        method: 'POST',
        headers: { 
          'Content-Type':'application/x-www-form-urlencoded'
        },
        body:`id=${id}`
      })
  
      res = await raw.json()

      //console.log('res',res)
      if(res.status){
        dispatch({
          type:actionType.PRODUCT_LOAD_DETAIL,
          payload:res.product
        })
      }else{
        console.log('error',res.message)
      }
     
      
    } catch (error) {

      console.log('error',error.message)
     
    }

  }
}

const loadCarts = () => {

  return async (dispatch) => {

    let res = {status:true}

    //--
    try {

      //console.log('API_URL', API_URL)
      const { API_URL } = getApi();
      const token = getCookie('token');
      //console.log('token',token)


      const raw = await fetch(`${API_URL}/products/load_carts`, {
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
          type:actionType.CART_LOAD,
          payload:res.carts
        })
      }else{
        console.log('error',res.message)
      }
     
    } catch (error) {

      console.log('error',error.message)
     
    }

    return res;

  }
}

const updateCart = ({ product_id,amount,status }) => {


  return async (dispatch) => {

    let res = {status:true}

    //--
    try {

      //console.log('API_URL', API_URL)
      const { API_URL } = getApi();
      const token = getCookie('token');
      //console.log('token',token)

      const model = {

        product_id,
        amount,
        status:(status === undefined)?1:status

      }


      const raw = await fetch(`${API_URL}/products/update_cart`, {
        method: 'POST',
        headers: { 
          'Content-Type':'application/x-www-form-urlencoded',
          'Authorization': `Bearer ${token}`
        },
        body:`params=${JSON.stringify(model)}`
      })
  
      res = await raw.json()

      //console.log('res',res)
      if(res.status){
        dispatch({
          type:actionType.CART_UPDATE,
          payload:res.model
        })
      }else{
        //console.log('error',res.message)
      }
     
    } catch (error) {

      console.log('error',error.message)
     
    }

    return res;

  }

}

const deleteOrderItem = (item) => {

  return async (dispatch)=>{


    let res = {status:true}

    //--
    try {

      //console.log('API_URL', API_URL)
      const { API_URL } = getApi();
      const token = getCookie('token');
      //console.log('token',token)


      const raw = await fetch(`${API_URL}/products/delete_cart`, {
        method: 'POST',
        headers: { 
          'Content-Type':'application/x-www-form-urlencoded',
          'Authorization': `Bearer ${token}`
        },
        body:`params=${JSON.stringify(item)}`
      })
  
      res = await raw.json()

      //console.log('res',res)
      if(res.status){
        dispatch({
          type:actionType.DELETE_ORDER_PRODUCT,
          payload:item
        })
      }else{
        //console.log('error',res.message)
      }
     
    } catch (error) {

      console.log('error',error.message)
     
    }

    return res;



   

  }
}


export {
  loadAllProducts,
  loadNewProducts,
  loadNewOther,
  loadProductDetail,
  loadCarts,
  updateCart,
  deleteOrderItem
}