import { Link } from "react-router-dom"
import { BsCart } from "react-icons/bs";
import styles from './Navbar.module.css'
import { useContext } from "react";
import { CartContext } from "../Features/ContextProvider";
import { TotalItems } from "../Features/CartReducer";

const Navbar =()=>{
    const {cart} = useContext(CartContext)
    return (
        <div className={styles.icons}>
            <Link to="/"><b>Home</b></Link>
            <Link to="/shop"><b>Shop</b></Link>
            <Link to="/cart"><b><BsCart/>{TotalItems(cart)}</b></Link>
        </div>
    )
}

export default  Navbar;