
import NavBar from "./NavBar"
import ItemLisContainer from "./ItemListContainer"
import { BrowserRouter } from "react-router-dom"



function App (){
    return <BrowserRouter>
    <NavBar/>
    <ItemLisContainer greeting="Aca podes encontrar todo lo que estas buscando" />
    </BrowserRouter>
   
   
}

export default App