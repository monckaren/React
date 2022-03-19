import React from "react"
import {Card} from 'react-bootstrap'
import {Link} from "react-router-dom"



function Item({producto}){
  console.log(producto)
return(
    <>
    <section className="Cards">
    <div className="container">
    <div className="row">
    <div className="col-md-12 py-3">
    <Card className=" p-2 g-4 " style={{ width: '15rem' }}>
    <Card.Img className="card-img" variant="top" src={producto.imagen} />
    <Card.Body>
    <Card.Title>{producto.nombre}</Card.Title>
    <Card.Text> $ {producto.precio}</Card.Text>
    <button className="btn">
      <Link to={`/item/${producto.id}`}>Ver mas...</Link>
    </button>
    
    </Card.Body>
    </Card>
      </div>

    </div>
    </div>
   
    </section>
 
    </>
) 
}

export default Item