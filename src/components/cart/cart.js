import React from 'react'
import PropTypes from 'prop-types'
import { useDispatch, useSelector } from "react-redux";
import {NavLink} from "react-router-dom"
import Cartproducts from './cartproducts';

function Cart(props) {

const storeState= useSelector(state=>state)
const {cart}=storeState
const dispatch = useDispatch()

    return (
        <div>
        <NavLink to={'/'}>Product Page</NavLink>
        
            <h3>CART</h3>
            <Cartproducts products={cart}/>
        </div>
    )
}

Cart.propTypes = {

}

export default Cart

