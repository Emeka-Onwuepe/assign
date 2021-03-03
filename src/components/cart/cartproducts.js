import React,{Fragment} from 'react'
import PropTypes from 'prop-types'
import { sentenceCase } from "../helperhFuncs"
import { removeFromCart, updateCart } from '../../state/actionFuncs'
import { useDispatch} from "react-redux";
import "../CSS/products.css"

function Cartproducts({products}) {
    
const dispatch = useDispatch()

    const removeItem=(id,cart)=>{
        const filtered= cart.filter(item=>item.id != id)
        dispatch(removeFromCart(filtered))
        
    }

    const decrease=(id,cart)=>{
        const [product]= cart.filter(item=>item.id == id)
        if(product.qty>1){
            product.qty-=1
        }
        dispatch(updateCart(cart))
    }

    const increase=(id,cart)=>{
        const [product]= cart.filter(item=>item.id == id)
        product.qty+=1
        dispatch(updateCart(cart))

    }
    const total=(cart)=>{
        let total=0
        cart.forEach(product=>total+=product.qty*product.price)
        return total

    }

    return (
        <Fragment>
        <div className="products"> {
            products.map(product => ( <div className = "productcard" key={product.id} >
                <p> { sentenceCase(product.name) } </p>
                 <p> Price: { product.price } </p> 
                 <p> Made in { sentenceCase(product.made) } </p> 
                 <p>Qty: {product.qty}</p>
                 <button onClick={()=>decrease(product.id,products)} >-</button>
                 <button onClick={()=>increase(product.id,products)} >+</button>
                 <button onClick={()=>removeItem(product.id,products)} >Delete</button>
                 </div>
            ))
        } 
        
        </div>
        <div className="total">Total: {total(products)}</div>
        </Fragment>
    )
}

Cartproducts.propTypes = {

}

export default Cartproducts

