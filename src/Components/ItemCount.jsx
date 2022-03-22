import { useState } from "react"
import {ButtonGroup, Button, InputGroup} from 'react-bootstrap'
import { Link } from 'react-router-dom'

function ItemCount (props){
    const [contador,setContador] = useState(props.initial)
    const [seleccionado, setSeleccionado] = useState(false)

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
   
    const onAdd = (unidadSeleccionada) => {
      console.log("desde el itenDetail")
      if(unidadSeleccionada != undefined){
      setSeleccionado(unidadSeleccionada)
      }else{
        setSeleccionado(true)
      }

      }
      const handleOnAdd = () => {
        console.log("on add")
        onAdd(contador)
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
    {seleccionado && <Link to="/Carrito"><Button onClick={() => setSeleccionado(true)}ariant="primary" size="md" active >
    Finalizar Compra
  </Button></Link>}
    <p> Has agregado al carrito {contador} producto (s) </p>
    <p>{seleccionado ? "ya se selecciono algo!" : "No se eligio ninguna cantidad"}</p>
    <Button variant="primary" size="md" active onClick={handleOnAdd}>
    Comprar
  </Button>
   
    </>
    );
        
    

}

export default ItemCount

