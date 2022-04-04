import { useState, useContext } from "react"
import {ButtonGroup, Button, InputGroup} from 'react-bootstrap'
import { Link, useParams } from 'react-router-dom'
import {CartContext} from "./CartContext"
import {handleOnAdd} from "./ItemDetail"


function ItemCount (props){
    const [contador,setContador] = useState(props.initial)
    const [seleccionado, setSeleccionado] = useState(false)
    const resultado = useContext(CartContext);


    

    const handleClick = () => {
        setContador(contador +1)
       
    }
    const handleMinus = () =>{
        setContador(contador - 1)
    }

    if(contador < props.initial){
      setContador(props.initial)
    }else if(contador > props.stock){
    setContador(props.stock)
        
    }
    
   
    return (
    <>
    <ButtonGroup aria-label="Basic example">
    <Button variant="secondary" onClick={handleMinus}> - </Button>
    <InputGroup>
      <InputGroup.Text id="btnGroupAddon">{contador}</InputGroup.Text>
      
    </InputGroup>
    <Button variant="secondary" onClick={handleClick}> + </Button>
    </ButtonGroup>
    {seleccionado && <Link to="/Carrito"><Button onClick={() => setSeleccionado(true)} variant="primary" size="md" active >
    Finalizar Compra
  </Button></Link>}
    <p> Has agregado al carrito {contador} producto (s) </p>
    <p>{seleccionado ? "ya se selecciono algo!" : "No se eligio ninguna cantidad"}</p>
   <Button variant="primary" size="md" active onClick={() => props.onAdd(contador)}>
   Agregar al carrito
  </Button>
  <Link  to="/Carrito"><Button variant="primary" size="md" active onClick={() => props.onAdd(contador)}>
   ir al carrito
  </Button></Link>
   
    </>
    );
        
    

}

export default ItemCount

