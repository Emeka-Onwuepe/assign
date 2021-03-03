import React,{useEffect} from 'react'
import PropTypes from 'prop-types'

import { useDispatch, useSelector } from "react-redux";
import {sentenceCase} from "../helperhFuncs"
import ProductCard from './productCard';



function Products(props) {
const storeState= useSelector(state=>state)
const {store}=storeState
const dispatch = useDispatch()

    return (
        <div>
            <h1>Product Page</h1>
            {store.map(item=>(<div key={item.id}>
                <h3>{sentenceCase(item.category)}</h3>
                <ProductCard products={item.products} />
               
                
                </div>))}
        </div>
    )
}

Products.propTypes = {

}

export default Products

