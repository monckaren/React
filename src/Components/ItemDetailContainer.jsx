import { getActiveElement } from "@testing-library/user-event/dist/utils"
import React from "react"
import {useState, useEffect} from "react"
import ItemDetail from "./ItemDetail"

let items = [{
id:1, 
nombre:"Campera White", 
imagen: "./img/ary-milligan-nLVyej-i2N4-unsplash.jpg", 
precio:"5800", quantity: 0, 
descripcion:"Campera de jean. Color: Blanco. Disponibles 3 y 6 cuotas sin interes"}]

const promise = new Promise ((res, rej) => {
setTimeout(() => {
res (items)
}, 2000)
})

const ItemDetailContainer = () => {

const [ item, setItem] = useState([])

const getItem = () => {
    return promise
}

useEffect(() => {
  getItem() 
.then((respuesta) => {
    setItem(items)
})  
.catch((error) => {
console.log(error)
})
})

return <>
<div>
    <ItemDetail item={item}/>
</div>
</>
}


export default ItemDetailContainer