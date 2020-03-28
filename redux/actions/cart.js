
//Action Types
export const ADD_PRODUCT = "ADD_PRODUCT";
export const REMOVE_PRODUCT = "REMOVE_PRODUCT";


//Action Creator
export const addProduct = () => ({
    type: ADD_PRODUCT
});

export const removeProduct = () => ({
    type: REMOVE_PRODUCT
});