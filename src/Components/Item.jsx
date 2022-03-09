import React from "react"
import {Card} from 'react-bootstrap'


function Item(producto){
return(
    <>
    <Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src={producto.imagen} />
  <Card.Body>
    <Card.Title>{producto.nombre}</Card.Title>
  
    <Card.Text>
        {producto.precio}
    </Card.Text>
   
  </Card.Body>
</Card>
    </>
) 
}

export default Item