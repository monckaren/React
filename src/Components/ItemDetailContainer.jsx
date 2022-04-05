//import { getActiveElement } from "@testing-library/user-event/dist/utils"
import React from "react"
import {useState, useEffect} from "react"
import ItemDetail from "./ItemDetail"
import {useParams} from "react-router-dom"
import {db} from "./Firebase"
import {getDocs, collection, query, where} from "firebase/firestore"
import { toast } from "react-toastify"


/* let items = [{id:1, nombre:"Campera White", imagen: "../img/ary-milligan-nLVyej-i2N4-unsplash.jpg", precio:"5800", descripcion:"Campera de jean. Color: Blanco. Disponibles 3 y 6 cuotas sin interes"},
{id:2, nombre: "Remera Black Slim Fit", imagen: "../img/ian-dooley-1yl3jzKoKXg-unsplash.jpg", precio:"2300",  sale: "false" },
{id:3, nombre: "Jean Slim Fit", imagen: "../img/vladimir-fedotov-MPfyh3xJ1iE-unsplash.jpg", precio:"4800", sale: "true" },
{id:4, nombre: "Jean Holgado Claro ", imagen: "../img/hans-isaacson-QJfXnkKrtlo-unsplash.jpg", precio:"5300",  sale: "false" },
{id:5, nombre: "Jean Roto con Parches", imagen: "../img/alicia-petresc-BciCcl8tjVU-unsplash.jpg", precio:"4300", sale: "true" },
{id:6, nombre: "Blazer Black", imagen: "../img/joshua-rondeau-3_sGB2ON4X0-unsplash.jpg", precio:"4600",  sale: "true" }]

const promise = new Promise ((res, rej) => {
    
setTimeout(() => {

res (items)
}, 2000)
}) */

export const ItemDetailContainer = () => {

  const [ item, setItem] = useState([])
const [isLoading, setLoading] =useState(true)
const [ productos, setProductos] = useState([])
const {id} = useParams()


/* const getItem = () => {

    return promise
} */
const params = useParams()

useEffect(() => {
  const productCollection = collection(db,"productos")
  const itemFilter = query(productCollection, where("id","==",id))
  const documentos = getDocs(itemFilter)

  documentos
  // getItem() 
.then(respuesta => {console.log("respuesta")
  setItem(respuesta.docs.map(doc=>doc.data())) })
   
.catch(error => toast.error("Error al obtener los productos"))
.finally(()=> setLoading(false))
},[id])
return <>
<div>
    {isLoading ? <span>Cargando..</span> : <ItemDetail item={item}/>}
</div>
</>
}


export default ItemDetailContainer