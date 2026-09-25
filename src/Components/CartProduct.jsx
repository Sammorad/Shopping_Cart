import { useContext } from "react";
import { CartContext } from "../Features/ContextProvider";

const CartProduct =({product })=>{
    
    const {cart, dispatch} = useContext(CartContext)

    function Increase(id){
        const  Index = cart.findIndex(p => p.id === id)
        dispatch({type: "Increase",id})
        
    }
      function Decrease(id){
        const  Index = cart.findIndex(p => p.id === id)
        dispatch({type: "Decrease",id})
        
    }


    return (
        <div>
            <img src={product.image} alt="" />
            <div>
                <h3>{product.title}</h3>
                <h4>${product.price}</h4>
                <div className="buttons">
                    <button onClick={() => Decrease(product.id)}><b>-</b></button>
                    <p>{product.quantity}</p>
                    <button onClick={()=> Increase(product.id)}><b>+</b></button>
                </div>
                <button onClick={() => dispatch({type: "Remove", id: product.id})}>remove</button>
            </div>
            

        </div>
    )
}

export default CartProduct;