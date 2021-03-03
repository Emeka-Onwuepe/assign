import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import { useDispatch, useSelector } from "react-redux";
import { sentenceCase } from "../helperhFuncs"
import { addToCart } from '../../state/actionFuncs';
import "../CSS/products.css"

function ProductCard({ products}) {

const storeState= useSelector(state=>state)
const {store,cart}=storeState
const dispatch = useDispatch()


  const addtoCartfun =(id,arr)=>{
    let picked=[];
    arr.forEach(elem => {
    const filtered=elem.products.filter(product=>product.id==id)
    if(filtered.length>0){
      picked=filtered[0]
    }
    });
    const copy={...picked,qty:1}
    const check= cart.filter(item=>item.id==copy.id)
    if(check.length==0){
      dispatch(addToCart(copy))
    }else{
      alert("Item already added to cart. Your can increase or decrease the quanty from the cart. ")
    }
    
    
}
    return ( <div className="container">
      <div className="products"> {
            products.map(product => ( <div className = "productcard" key={product.id} >
                <p> { sentenceCase(product.name) } </p>
                 <p> Price: { product.price } </p> 
                 <p> Made in { sentenceCase(product.made) } </p> 
                 <button onClick={()=>addtoCartfun(product.id,store)}>Add to Cart</button>
                 </div>
            ))
        } 
        </div>
      </div>
    )
}

ProductCard.propTypes = {

}

export default ProductCard