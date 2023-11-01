import { createStore,combineReducers ,applyMiddleware} from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { getProductsReducer } from "./reducers/productReducers";


const reducer = combineReducers({
    products:getProductsReducer
})


export const store = createStore(reducer,{},composeWithDevTools(applyMiddleware(thunk)))