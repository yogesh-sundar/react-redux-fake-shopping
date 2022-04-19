import { actionTypes } from "../ActionType/actionsType.js";

const initialState = {
    products: []
};

export const setProductReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.SET_PRODUCTS:
            return {
                ...state, products: action.payload
            }

        default: return state
    }
}

export const selectedProductReducer = (state = {}, action) => {
    switch (action.type) {
        case actionTypes.SELECETED_PRODCUCT:
            return {
                ...state, ...action.payload
            }
        default: return state
    }
}