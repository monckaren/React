
import NavBar from "./NavBar"
import ItemListContainer from "./ItemListContainer"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import ItemDetailContainer from "./ItemDetailContainer"
import {ToastContainer} from "react-toastify"
import 'react-toastify/dist/ReactToastify.css'
import {Carrito} from "./Carrito"



function App (){
    const handleToast = () => {
       <ToastContainer/> 
    }
    return <BrowserRouter>
    <NavBar/>
    
    <Routes>
        <Route path="/" element={<ItemListContainer greeting="Aca podes encontrar todo lo que estas buscando" />}></Route>
        <Route path="/category/:id" element={<ItemListContainer/>}></Route>
        <Route path="/Carrito" element={<Carrito/>}></Route>
        <Route path="/item/:id" element={<ItemDetailContainer/>}></Route>
        <Route path="/sale/:true" element={<ItemListContainer/>}></Route>
  
    </Routes>
 
    </BrowserRouter>
    
   
   
}

export default App