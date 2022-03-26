
import {createContext, useState} from "react"
export const CartContext = createContext()
const {Provider} = CartContext

export const NewProvider = ({children}) => {
  
   const [total, setTotal] = useState(0)
   const [quantity, setQuantity] = useState(0)
   const [cart, setCart] = useState([])
   const [seleccionado, setSeleccionado] = useState(false)
   
  const cartProductAux = ([])
  const clearCart = () => {
    setCart([])
}
   const addItem = (item, quantity) => {
    let cartProduct = {item, quantity};
  
    if(isInCart(item)){
      cartProduct = cart.find(x => x.item.id === item.id)
      cartProduct.quantity = cart.quantity + quantity;
      cartProductAux = [...cart]
    }else{
      cartProductAux = [...cart,cartProduct]
    }
    setCart(cartProductAux)
    const deleteCart = (id) => {}
  
  console.log("on add")

} 
const removeItem = (id) => {}
  const onAdd = (unidadSeleccionada) => {
    if(unidadSeleccionada !== undefined){
    setSeleccionado(unidadSeleccionada)
    
    }else{
      setSeleccionado(true)
    }
  }


   const isInCart = (item) => {
    const result = cart.some(p => p.item.id === item.id)
    return result 
    }

return (
<Provider value={{addItem, removeItem, clearCart, cart}}>
  {children}

</Provider>
)


}
  


