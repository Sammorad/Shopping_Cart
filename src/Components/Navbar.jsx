import { Link } from "react-router-dom"
import { BsCart } from "react-icons/bs";
import styles from './Navbar.module.css'

const Navbar =()=>{
    return (
        <div className={styles.icons}>
            <Link to="/">Home</Link>
            <Link to="/shop">Shop</Link>
            <Link to="/cart"><BsCart/></Link>
        </div>
    )
}

export default  Navbar;