import { actionTypes } from "../ActionType/actionsType"

export const setProducts = (products) => {
    return {
        type: actionTypes.SET_PRODUCTS,
        payload: products
    };
}

export const selectedProduct = (product) => {
    return {
        type: actionTypes.SELECETED_PRODCUCT,
        payload: product
    };
}