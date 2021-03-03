import React from 'react'
import PropTypes from 'prop-types'
import {  useSelector } from "react-redux";
import {NavLink}from "react-router-dom"
import "../CSS/cartcounter.css"

function Cartcounter(props) {
const storeState= useSelector(state=>state)
const {cart}=storeState
  return (
    <div className="counter">
      <NavLink to={"/cart"}>{cart.length}</NavLink>
      
    </div>
  )
}

Cartcounter.propTypes = {

}

export default Cartcounter

