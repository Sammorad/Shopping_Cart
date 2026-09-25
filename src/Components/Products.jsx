import styles from './Navbar.module.css'
import { useContext, useState } from 'react';
import { CartContext } from '../Features/ContextProvider';


//Defining each product here before importing it to the shop//
const Product =({product}) =>{
    const {dispatch} = useContext(CartContext)
    const [quantity, setQuantity] = useState(1)
    return(
        <div className={styles.eachProduct}>
           <div className={styles.productImage}> <img src={product.image} alt="" /></div>
           <p>{ product.title}</p>
           <h2>${product.price}</h2>
           
           <button onClick={() => dispatch({  type:"Add", product:{...product, quantity:1} })}>Add to Cart</button>
        </div>
    )
}
export default Product;