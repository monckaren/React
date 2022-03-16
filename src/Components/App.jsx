
import NavBar from "./NavBar"
import ItemLisContainer from "./ItemListContainer"
import { BrowserRouter } from "react-router-dom"
import ItemDetailContainer from "./ItemDetailContainer"
import {ToastContainer} from "react-toastify"
import 'react-toastify/dist/ReactToastify.css';

function App (){
    return <BrowserRouter>
    <NavBar/>
    <ItemLisContainer greeting="Aca podes encontrar todo lo que estas buscando" />
    <ItemDetailContainer/>
    <ToastContainer/>
    </BrowserRouter>
    
   
   
}

export default App