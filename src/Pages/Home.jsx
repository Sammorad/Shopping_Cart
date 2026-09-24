import shop from '../Images/Shopping_mall.jpg'
import styles from "../Components/Navbar.module.css"

const Home = () =>{
    return (
        <div className={styles.homeContainer}>
             <div>
                <p>Excellent Collections</p>
                <h2>Welcome to Your One Stop Shop</h2>
                <p>Discover elegant designs for you and your family</p>
                <button>Shop now</button>
            </div>
            
            <img className={styles.mall} src={shop} alt="Shopping mall image" />
            
           
        </div>
    )
}

export default Home;