import {Card} from 'react-bootstrap'

import ItemCount from './ItemCount'
import { useState } from 'react'

 
const ItemDetail = ({item}) => {

  const [seleccionado, setSeleccionado] = useState(false)
    return <>
    <div className='detailCard mt-5'>
    <Card style={{ width: '25rem' }}>
  <Card.Img variant="top" src={item[0].imagen} />
  <Card.Body>
  <Card.Title>{item[0].nombre}</Card.Title>
  <Card.Text>{item[0].descripcion}</Card.Text>
  <ItemCount initial={1} stock={10} />
  </Card.Body>
  </Card>
  
    </div>
    </>
}
export default ItemDetail 