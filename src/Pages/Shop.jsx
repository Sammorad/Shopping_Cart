import { useState, useEffect } from "react";
import Product from "../Components/Products";

const Shop =()=>{
    const [products, setProducts] = useState([]);
    const [error, setError] = useState(null)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        fetch("https://fakestoreapi.com/products/")
        .then((Response) => {
            if (Response.status >= 400) {
                throw new Error("Server Unavailable")
            }
            return Response.json()
        })
        .then((Response) => setProducts(Response))
        .catch((error) => setError(error))
        .finally(() => setLoading(false))

    }, [])
    if (loading) return <p>Loading</p>
    if (error) return <p>A network Error</p>
    return (
        <div>
            {products.map((product) =>(
                    <Product product ={product}/>
            ))}
            
        </div>
    )

}

export default Shop;