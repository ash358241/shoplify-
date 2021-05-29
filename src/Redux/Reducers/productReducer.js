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

export const selectedProductReducer = (state={}, { type, payload }) => {
    console.log(type);
    switch (type) {
        case ActionTypes.SET_PRODUCT:
            return {...state, ...payload};
        case ActionTypes.REMOVE_SET_PRODUCT:
            return {};
        default:
            return state;
    }
};