import { Link } from "react-router-dom"
import { BsCart } from "react-icons/bs";
import styles from './Navbar.module.css'
import { useContext } from "react";
import { CartContext } from "../Features/ContextProvider";


const Navbar =()=>{
    const {cart} = useContext(CartContext)
    return (
        <div className={styles.icons}>
            <Link to="/">Home</Link>
            <Link to="/shop">Shop</Link>
            <Link to="/cart"><BsCart/>{cart.length}</Link>
        </div>
    )
}

export default  Navbar;