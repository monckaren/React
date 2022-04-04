
import NavBar from "./NavBar"
import ItemListContainer from "./ItemListContainer"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import ItemDetailContainer from "./ItemDetailContainer"
import {ToastContainer} from "react-toastify"
import 'react-toastify/dist/ReactToastify.css'
import {NewProvider } from "./CartContext"
import {Cart} from "./Cart"
import ItemCount from "./ItemCount"
import {createContext} from "react"

export const CartContext = createContext([ItemCount])
const {Provider} = CartContext

function App (){
    const handleToast = () => {
       <ToastContainer/> 
    }
    return (
<NewProvider>
       <BrowserRouter>
    <NavBar/>
    
    <Routes>
        <Route path="/" element={<ItemListContainer greeting="Aca podes encontrar todo lo que estas buscando" />}></Route>
        <Route path="/category/:id" element={<ItemListContainer/>}></Route>
        <Route path="/Carrito" element={<Cart/>}></Route>
        <Route path="/item/:id" element={<ItemDetailContainer/>}></Route>
        <Route path="/sale/:true" element={<ItemListContainer/>}></Route>
  
    </Routes>
 
    </BrowserRouter>
</NewProvider>
 
   

 
    
    ) 
}

export default App