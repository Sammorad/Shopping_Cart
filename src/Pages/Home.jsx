import shop from '../Images/Shopping_mall.jpg'
import styles from "../Components/Navbar.module.css"
import { Link } from 'react-router-dom'

const Home = () =>{
    return (
        <div className={styles.homeContainer}>
             <div>
                <p>Excellent Collections</p>
                <h2>Welcome to Your One Stop Shop</h2>
                <p>Discover elegant designs for you and your family</p>
                <Link to='/shop' className={styles.shopNow}>Shop Now</Link>
            </div>
            
            <img className={styles.mall} src={shop} alt="Shopping mall image" />
            
           
        </div>
    )
}

export default Home;