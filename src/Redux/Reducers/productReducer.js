import {ActionTypes} from "../Contants/action-type"; 
const intialState = {
    products: [
        {
            id: 1,
            title: "ash",
            category: "programmer",
        }
    ],
  };

export const productReducer = (state = intialState, { type, payload }) => {
    switch (type) {
        case ActionTypes.SET_PRODUCTS:
            return state;
        default:
            return state; 
    }
}