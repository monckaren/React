
import NavBar from "./NavBar"
import ItemLisContainer from "./ItemListContainer"
import { BrowserRouter } from "react-router-dom"
import ItemDetailContainer from "./ItemDetailContainer"



function App (){
    return <BrowserRouter>
    <NavBar/>
    <ItemLisContainer greeting="Aca podes encontrar todo lo que estas buscando" />
    <ItemDetailContainer/>
    </BrowserRouter>
   
   
}

export default App