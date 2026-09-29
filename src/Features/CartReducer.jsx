export const TotalItems =(cart)=>{
    return cart.reduce((sum, product) => sum + product.quantity, 0)
}

export const TotalPrice = (cart) => {
    return cart.reduce((total, product) => total + product.quantity * product.price, 0)
}
const CartReducer = (state, action) =>{
    switch(action.type){
        case "Add":{
            const exists = state.find(p => p.id === action.product.id)
            if(exists){
                return state.map(p =>
                    p.id === action.product.id? { ...p, quantity: p.quantity + 1} : p
                )
            }
            return [...state, action.product]
        }
            

        case "Increase":
            return state.map(product => 
                product.id ===action.id? {...product, quantity: product.quantity + 1}: product
            )

        case "Decrease":
              return state.map(product => 
                product.id ===action.id? {...product, quantity: Math.max(1, product.quantity - 1)}: product
            )

        case "Remove":
            return state.filter(p => p.id !== action.id)

        default:
            return state
    }
}

export default CartReducer;