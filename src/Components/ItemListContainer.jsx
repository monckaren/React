import {useState, useEffect} from "react"
import ItemCount from "./ItemCount"
import ItemList from "./ItemList"

let productosIniciales = [
    {id:1, nombre:"Campera White", imagen: "./img/ary-milligan-nLVyej-i2N4-unsplash.jpg", precio:"5800", quantity: 0},
    {id:2, nombre: "Remera Black Slim Fit", imagen: "./img/ian-dooley-1yl3jzKoKXg-unsplash.jpg", precio:"2300", quantity:0 },
    {id:3, nombre: "Jean Slim Fit", imagen: "./img/vladimir-fedotov-MPfyh3xJ1iE-unsplash.jpg", precio:"4800", quantity:0 },
    {id:4, nombre: "Jean Holgado Claro ", imagen: "./img/hans-isaacson-QJfXnkKrtlo-unsplash.jpg", precio:"5300", quantity:0 },
    {id:5, nombre: "Jean Roto con Parches", imagen: "./img/alicia-petresc-BciCcl8tjVU-unsplash.jpg", precio:"4300", quantity:0 },
    {id:6, nombre: "Blazer Black", imagen: "./img/joshua-rondeau-3_sGB2ON4X0-unsplash.jpg", precio:"4600", quantity:0 },
    ]
    const ItemLisContainer =  (props) => {
    const [loading, setLoading] = useState(true)
    const [ productos, setProductos] = useState([])

useEffect (() => {

    const promesa = new Promise ((res,rej) => {
        setTimeout(() => {
        res(productosIniciales) 

    }, 2000)  
 })
    promesa 
        .then((respuestaApi) => {
           setProductos(productosIniciales) 
        })
        .catch((errorApi) => {
            alert ("Error de la web")
        })
        .finally(() => {
           setLoading (false) 
        })
    
})
    const handleOnAdd = () => {} 
return (
    <>
   <main className="container">
   <h2>{props.greeting}</h2>
    <ItemCount initial={1} stock={10} onAdd={handleOnAdd}/>
    <p>{loading ? "Loading..." : "Productos cargados"}</p>
    <ItemList productos={productos}/>
   
</main>
    </>
)
    
    
    }
export default ItemLisContainer