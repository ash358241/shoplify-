import {combineReducers} from "redux"; 
first-contributor
import {productReducer, selectedProductReducer } from "./productReducer"; 
import {productReducer } from "./productReducer"; 
import 'semantic-ui-css/semantic.min.css';

const reducers = combineReducers({
    allProducts: productReducer,
    product: selectedProductReducer
})

export default reducers;