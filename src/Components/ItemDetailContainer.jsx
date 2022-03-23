//import { getActiveElement } from "@testing-library/user-event/dist/utils"
import React from "react"
import {useState, useEffect} from "react"
import {useParams} from "react-router-dom"
import ItemDetail from "./ItemDetail"

let items = [ {id:1, nombre:"Campera White", imagen: "../img/ary-milligan-nLVyej-i2N4-unsplash.jpg", precio:"5800", quantity: 0, sale: "true"},
{id:2, nombre: "Remera Black Slim Fit", imagen: "../img/ian-dooley-1yl3jzKoKXg-unsplash.jpg", precio:"2300", quantity:0, sale: "false" },
{id:3, nombre: "Jean Slim Fit", imagen: "../img/vladimir-fedotov-MPfyh3xJ1iE-unsplash.jpg", precio:"4800", quantity:0, sale: "true" },
{id:4, nombre: "Jean Holgado Claro ", imagen: "../img/hans-isaacson-QJfXnkKrtlo-unsplash.jpg", precio:"5300", quantity:0, sale: "false" },
{id:5, nombre: "Jean Roto con Parches", imagen: "../img/alicia-petresc-BciCcl8tjVU-unsplash.jpg", precio:"4300", quantity:0, sale: "true" },
{id:6, nombre: "Blazer Black", imagen: "../img/joshua-rondeau-3_sGB2ON4X0-unsplash.jpg", precio:"4600", quantity:0, sale: "true" },]

const promise = new Promise ((res, rej) => {

setTimeout(() => {

res (items)
}, 2000)
})

const ItemDetailContainer = () => {

const [ item, setItem] = useState([])
const [isLoading, setIsLoading] =useState(true)
const {id} = useParams()

const getItem = () => {
    return promise
}

useEffect(() => {
  getItem() 
.then((respuesta) => {
    setItem(items)
    setIsLoading(false)
})  
.catch((error) => {
console.log(error)
})
},[id])

return <>
<div>
    {isLoading ? <span>Cargando..</span> : <ItemDetail item={item}/>}
</div>
</>
}


export default ItemDetailContainer