import { useContext } from "react";
import { CartContext } from "../Features/ContextProvider";
import styles from '../Components/Navbar.module.css'
import CartProduct from "../Components/CartProduct";
import { TotalItems, TotalPrice } from "../Features/CartReducer";



const Cart =() => {
    const {cart} =useContext(CartContext)
    return (
        <div>
            <div className={styles.cartItems}>
                {cart.map(product =>(
                    <CartProduct product={product}/>
                ))}
            </div>
            <div className={styles.cartSummary}>
                <h4>Total Items: {TotalItems(cart)} </h4>
                <h4>Total Price: ${TotalPrice(cart)}</h4>
                <button> CheckOut </button>

            </div>
        </div>
    )
}
export default Cart;