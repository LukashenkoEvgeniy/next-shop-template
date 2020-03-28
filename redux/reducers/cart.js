import {ADD_PRODUCT, REMOVE_PRODUCT} from "../actions/cart";

const initialState = {
    count: 0
};


const cart = (state = initialState, action) => {
    switch (action.type) {
        case ADD_PRODUCT:
            return {...state, count: state.count + 1};

        case REMOVE_PRODUCT:
            return {...state, count: state.count - 1};
        default:
            return {...state};
    }
};

export default cart;