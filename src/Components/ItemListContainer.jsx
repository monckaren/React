import {useState, useEffect} from "react"
import ItemList from "./ItemList"
import {toast} from "react-toastify"
import {useParams} from "react-router-dom"
import {db} from "./Firebase"
import {getDocs, collection, query, where} from "firebase/firestore"



/* let productosIniciales = [
    {id:1, nombre:"Campera White", imagen: "../img/ary-milligan-nLVyej-i2N4-unsplash.jpg", precio:"5800", quantity: 0, sale: "true"},
    {id:2, nombre: "Remera Black Slim Fit", imagen: "../img/ian-dooley-1yl3jzKoKXg-unsplash.jpg", precio:"2300", quantity:0, sale: "false" },
    {id:3, nombre: "Jean Slim Fit", imagen: "../img/vladimir-fedotov-MPfyh3xJ1iE-unsplash.jpg", precio:"4800", quantity:0, sale: "true" },
    {id:4, nombre: "Jean Holgado Claro ", imagen: "../img/hans-isaacson-QJfXnkKrtlo-unsplash.jpg", precio:"5300", quantity:0, sale: "false" },
    {id:5, nombre: "Jean Roto con Parches", imagen: "../img/alicia-petresc-BciCcl8tjVU-unsplash.jpg", precio:"4300", quantity:0, sale: "true" },
    {id:6, nombre: "Blazer Black", imagen: "../img/joshua-rondeau-3_sGB2ON4X0-unsplash.jpg", precio:"4600", quantity:0, sale: "true" },
    ] */

const ItemListContainer =  (props) => {
const [loading, setLoading] = useState(true)
const [ productos, setProductos] = useState([])
const params = useParams()
const {id} = useParams()
useEffect (() => {
    const productCollection = collection(db,"productos")
    const documentos = getDocs(productCollection)
    documentos
    .then((respuesta) => {
        const aux = []
        setLoading(false)
        respuesta.forEach((documento) => {
            const items = {
                id : documento.id,
                ...documento.data()
            }
            aux.push(items)
            console.log(items)
        })
        setProductos(aux)
    },[id]) 
     .catch(() => {
        toast.error("Ocurrio un error")
    }) 
    /* const promesa = new Promise ((res,rej) => {
        setTimeout(() => {
        res(productosIniciales) 

    }, 2000)  */ 
 },[id])

 /* if(params.true){
     promesa
     .then((data) => {
         setProductos(data.filter(x=> x.sale == params.true));
         setLoading(false)
     })
 }else{
    promesa 
    .then((respuestaApi) => {
        setProductos(productosIniciales) 
    })
    .catch((errorApi) => {
        toast.error("Error del servidor")
    })
    .finally(() => {
        setLoading (false) 
    })

} 


}, [params.true]) */
return <>
   <main className="container">
   <h2>{props.greeting}</h2>
    <p>{loading ? "Loading..." : "Productos cargados"}</p>
    <ItemList productos={productos}/>
   
</main>
    </>
 
}
export default ItemListContainer