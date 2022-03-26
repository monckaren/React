
import {createContext, useState} from "react"
export const CartContext = createContext()
const {Provider} = CartContext

export const NewProvider = ({children}) => {
  
   const [total, setTotal] = useState(0)
   const [quantity, setQuantity] = useState(0)
   const [cart, setCart] = useState([])
   const [seleccionado, setSeleccionado] = useState(false)
   
  let cartProductAux = ([])
  const clearCart = () => {
    setCart([])
}
   const addItem = (item, quantity) => {
    let cartProduct = {item, quantity};
  
    if(isInCart(item)){
      cartProduct = cart.find(x => x.item.id === item.id)
      cartProduct.quantity = cartProduct.quantity + quantity;
      cartProductAux = [...cart]
    }else{
      cartProductAux = [...cart,cartProduct]
    }
    setCart(cartProductAux)
  

} 
const removeItem = (item) => {
setCart(cart.filter(p=>p.item != item.id))
}
  
  


   const isInCart = (item) => {
    const result = cart.some(p => p.item.id === item.id)
    return result 
    }
console.log(cart)
return (
<Provider value={{addItem, removeItem, clearCart, cart}}>
  {children}

</Provider>
)


}
  


