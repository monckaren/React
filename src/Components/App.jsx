
import NavBar from "./NavBar"
import ItemLisContainer from "./ItemListContainer"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import ItemDetailContainer from "./ItemDetailContainer"
import {ToastContainer} from "react-toastify"
import 'react-toastify/dist/ReactToastify.css'
import {Carrito} from "./Carrito"
import {Sale} from "./Sale"


function App (){
    const handleToast = () => {
       <ToastContainer/> 
    }
    return <BrowserRouter>
    <NavBar/>
    
    <Routes>
        <Route path="/" element={<ItemLisContainer greeting="Aca podes encontrar todo lo que estas buscando" />}></Route>
        <Route path="/categorias/:id" element={<ItemLisContainer/>}></Route>
        <Route path="/Carrito" element={<Carrito/>}></Route>
        <Route path="/item/:id" element={<ItemDetailContainer/>}></Route>
        <Route path="/Sale" element={<Sale/>}></Route>
    </Routes>
 
    </BrowserRouter>
    
   
   
}

export default App