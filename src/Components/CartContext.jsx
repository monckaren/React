
import {createContext, useState} from "react"

export const context = createContext()
const {Provider} = context

export const MiProvider = ({children}) => {
  const [carrito, setCarrito] = useState([])
  const [total, setTotal] = useState (0)
  const [quantity, setQuantity] = useState(0)

  const borrarDelCarrito = (id) => {}

  const agregarAlCarrito = (producto, quantity) => {
    if (isInCart()){
    }else{
        const copia = carrito.slice(0)
      }
    }

    const cleanCart = () => {
      setCarrito([])
    }

    const isInCart = (id) => {}
    const contextValue = {
      carrito : carrito,
      total : total,
      borrarDelCarrito : borrarDelCarrito,
      agregarAlCarrito : agregarAlCarrito,

    }
      return (
        <Provider value={contextValue}>
          {children}
        </Provider>
      )
    }

  


