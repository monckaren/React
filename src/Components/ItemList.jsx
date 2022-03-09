import React from 'react'
import Item from "./Item"

const ItemList = ({productos}) => {
    return <>
    <ul>
           {productos.map((producto => {
               return (<>
               <Item producto={producto}/>
               </>)
           }))}
       </ul>
    </>
}
export default ItemList