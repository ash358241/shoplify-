import {ActionTypes} from "../Contants/action-type"; 
const intialState = {
    products: [],
  };

export const productReducer = (state = intialState, { type, payload }) => {
    switch (type) {
        case ActionTypes.SET_PRODUCTS:
            return {...state, products: payload};
        default:
            return state; 
    }
}