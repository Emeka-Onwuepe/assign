import { ADD_TO_CART,REMOVE_FROM_CART,UPDATE_CART } from "./actions"


const storeReducer = (state, action) => {
    switch (action.type) {
        case ADD_TO_CART:
            return {
                ...state,
                cart: [...state.cart,action.data]
            }
        case REMOVE_FROM_CART:
            return{
                ...state,
                cart:action.data
            }
        case UPDATE_CART:
            return {
                ...state,
                cart: [...action.data],
            }
        default:
            return {
                ...state
            }
    }
}

export default storeReducer
