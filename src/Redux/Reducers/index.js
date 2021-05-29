import {combineReducers} from "redux"; 
import {productReducer } from "./productReducer"; 
import 'semantic-ui-css/semantic.min.css';

const reducers = combineReducers({
    allProducts: productReducer,
})

export default reducers;