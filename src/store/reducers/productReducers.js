import {GET_PRODUCTS_FAIL,GET_PRODUCTS_REQUEST,GET_PRODUCTS_SUCCESS} from '../constants/productConstants'

export const getProductsReducer = (state={}, action)=>{
    switch(action.type){
        case GET_PRODUCTS_REQUEST:
            return{
                ...state,
                loading:true
            }
        case GET_PRODUCTS_SUCCESS:
            return{
                ...state,
                loading:false,
                products:action.payload
            }
        case GET_PRODUCTS_FAIL:
            return {
                ...state,
                loading:false,
                error:action.payload
            }
        default:
            return state
    }
}


