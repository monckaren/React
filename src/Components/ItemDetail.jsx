import {Card} from 'react-bootstrap'
import {CartContext} from "./CartContext"
import { useContext } from 'react'
import ItemCount from './ItemCount'
import { useState } from 'react'
import { db } from "./Firebase"
import { getDoc , collection , doc , where , query , getDocs } from "firebase/firestore"
import { Link, useNavigate, useParams } from "react-router-dom"
 
export const ItemDetail = ({item}) => {
  console.log(item)
  const [producto] = item
  const {addItem} = useContext(CartContext)
  


  const handleOnAdd = (contador) => {
    addItem(item, contador)}
return <>
<div className='detailCard mt-5'>
  <Card style={{ width: '25rem' }}>
  <Card.Img variant="top" src={producto.imagen} />
  <Card.Body>
  <Card.Title>{producto.nombre}</Card.Title>
  <Card.Text>{producto.descripcion}</Card.Text>
  <ItemCount initial={1} stock={10} onAdd={handleOnAdd}/>
  </Card.Body>
  </Card>
</div>

</>
}

export default ItemDetail 