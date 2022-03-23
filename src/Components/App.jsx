
import NavBar from "./NavBar"
import ItemListContainer from "./ItemListContainer"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import ItemDetailContainer from "./ItemDetailContainer"
import {ToastContainer} from "react-toastify"
import 'react-toastify/dist/ReactToastify.css'
import {MiProvider, CartContext} from "./CartContext"
import {Carrito} from "./Carrito"





function App (){
    const handleToast = () => {
       <ToastContainer/> 
    }
    return (
    <MiProvider>
    <BrowserRouter>
    <NavBar/>
    
    <Routes>
        <Route path="/" element={<ItemListContainer greeting="Aca podes encontrar todo lo que estas buscando" />}></Route>
        <Route path="/category/:id" element={<ItemListContainer/>}></Route>
        <Route path="/Carrito" element={<Carrito/>}></Route>
        <Route path="/item/:id" element={<ItemDetailContainer/>}></Route>
        <Route path="/sale/:true" element={<ItemListContainer/>}></Route>
  
    </Routes>
 
    </BrowserRouter>
    </MiProvider>
    
    ) 
}

export default App