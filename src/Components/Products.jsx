import styles from './Navbar.module.css'
import { useState } from 'react';

const Product =({product}) =>{
    const [quantity, setQuantity] = useState(1)
    return(
        <div>
            <img src={product.image} alt="" />
           <h2>{ product.title}</h2>
           <p>{product.price}</p>
           <div className={styles.itemButtons}>
            <button><b>+</b></button>
            <p>{quantity}</p>
            <button><b>-</b></button>
           </div>
           <button>Add to Cart</button>
        </div>
    )
}
export default Product;