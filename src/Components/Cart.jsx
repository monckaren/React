import {CartContext} from "./CartContext"
import Table from 'react-bootstrap/Table'
import {removeItem} from "./CartContext"
import { useContext, useState } from "react"
import {Link} from "react-router-dom"

export const Cart = ({item}) => {
  console.log(item)
  const {cart, total, removeItem} = useContext(CartContext)
  
      {
        cart.length > 0 ?
        <ul>
          { cart.map(item => {
    return (<div>
    <Table>
      <h1>Carrito</h1>
    
    <thead>
  <tr>
    <th>Cantidad </th>
    <th>Producto</th>
    <th>Precio</th>
    <th>Total</th>
  </tr>
  </thead>
  <tbody><tr>
  <td>{item.quantity}</td>
        <td>{item.nombre}</td>
        <td>${item.precio}</td>
        <td>${item.quantity} x {item.item.precio}</td> 
      <button onClick={removeItem} className="btn btn-primary">-</button> 
      </tr>
      </tbody>
    </Table> 
    </div>)
      })}
        
        
  <div>
    <div>
    <p>Total</p>
    <p>${total}</p>
    </div>
    <p className="btn ">Generar orden</p>
  <link to="/">
    <p className="btn">Continuar comprando</p>
 </link>
  </div>
  
    </ul>
    :
    <div>
      <p>No hay productos en el carrito</p> 
     <p className="btn"><Link to="/">Volver al home</Link></p>
    </div>
   
    
 
       
    
     
      
}}
 

   
  
        
    