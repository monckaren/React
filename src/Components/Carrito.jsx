import { useContext } from 'react'
import {context} from "./CartContext"
import Table from 'react-bootstrap/Table'

export const Carrito = () => {
  const resultado = useContext(context)
const carrito = resultado.carrito
const borrarDelCarrito = resultado.borrarDelCarrito
const total = resultado.total

const handleBorrar = () => {
    console.log("Se ha eliminado")
}
    return<>
    {carrito.map(item =>(
     <Table className="container mt-4" >
      <thead>
    <tr>
      <th>Cantidad </th>
      <th>Producto</th>
      <th>Precio</th>
      <th>Total</th>
    </tr>
    </thead>
    <tbody>
    <tr>
      <td>{item.quantity}</td>
      <td>{item.nombre}</td>
      <td>${item.precio}</td>
      <td>${item.quantity} x {item.precio}</td>
    <button onClick={handleBorrar}>Eliminar</button>
    </tr>
    
      </tbody>
    </Table>
    ))}
       </>
    
   
  
        
    }