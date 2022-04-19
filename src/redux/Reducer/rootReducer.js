import { combineReducers } from "redux";
import { selectedProductReducer, setProductReducer } from "./reducers";

export const rootReducer = combineReducers({
    allProducts: setProductReducer,
    product: selectedProductReducer
})

