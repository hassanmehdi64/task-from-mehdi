import {GET_PRODUCTS_FAIL,GET_PRODUCTS_REQUEST,GET_PRODUCTS_SUCCESS} from '../constants/productConstants'
import axios from 'axios'
export const getProducts = (limit)=> async (dispatch)=>{
    try {
        dispatch({type:GET_PRODUCTS_REQUEST})
        let url = '/products'
        if(limit){
            url+=`?limit=${limit}`
        }
        const {data} = await axios.get(url)
        dispatch({type:GET_PRODUCTS_SUCCESS,payload:data})
    } catch (error) {
        dispatch({type:GET_PRODUCTS_FAIL,payload:error.message})
    }
}