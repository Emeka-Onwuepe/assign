import { ADD_TO_CART, REMOVE_FROM_CART, UPDATE_CART } from "./actions"

export const addToCart = (data) => {
    return {
        type: ADD_TO_CART,
        data: data
    }
}

export const removeFromCart = (data) => {
    return {
        type: REMOVE_FROM_CART,
        data: data
    }
}

export const updateCart = (data) => {
    return {
        type: UPDATE_CART,
        data: data
    }
}