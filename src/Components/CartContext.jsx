
import {createContext, useEffect, useState} from "react"

export const CartContext = createContext()
const {Provider} = CartContext
 
export const NewProvider = ({children}) => {
  
const [cart, setCart] = useState([])
  
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
const [total, setTotal] = useState(0)
const CheckTotal = () => {
  let totalPurchase = 0
  cart.map (p => { totalPurchase = totalPurchase + (p.item.precio * p.quantity)})
  useEffect(()=>{
    CheckTotal()
  }, [cart])
} 
  
const isInCart = (item) => {
const result = cart.find(p => p.id === item.id)
if (isInCart){
return cart.map((i) => 
i.id === item.id ? { ...i, queantity : i.quantity + 1 } : i)
}
return result 
    }
console.log(cart)
return (
<Provider value={{addItem, removeItem, clearCart, cart}}>
  {children}

</Provider>
)


}
  
 

