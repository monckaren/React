import {context} from "./CartContext"
import Table from 'react-bootstrap/Table'


export const Carrito = () => {


    return<>
    <Table>
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
      {/* <td>{quantity}</td>
      <td>{nombre}</td>
      <td>${precio}</td>
      <td>${quantity} x {precio}</td> */}
    {/* <button onClick={handleBorrar}>Eliminar</button> */}
    </tr>
    
      </tbody>
    </Table> 
     
          </>
}
 
    
   
  
        
    