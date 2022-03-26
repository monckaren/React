import {Card} from 'react-bootstrap'
import {CartContext} from "./CartContext"
import { useContext } from 'react'
import ItemCount from './ItemCount'
import { useState } from 'react'

 
export const ItemDetail = ({producto}) => {
  console.log(producto)
  const [item] = producto
  const {addItem} = useContext(CartContext)
  const [cart, setCart] = useState([]) 


  const handleOnAdd = (contador) => {
    addItem(producto, contador)}
return <>
<div className='detailCard mt-5'>
  <Card style={{ width: '25rem' }}>
  <Card.Img variant="top" src={item.imagen} />
  <Card.Body>
  <Card.Title>{item.nombre}</Card.Title>
  <Card.Text>{item.descripcion}</Card.Text>
  <ItemCount initial={1} stock={10} onAdd={handleOnAdd}/>
  </Card.Body>
  </Card>
</div>

</>
}

export default ItemDetail 