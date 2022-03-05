import { useState } from "react"
import {ButtonGroup, Button, InputGroup, FormControl} from 'react-bootstrap'

function ItemCount (props){
    const [contador,setContador] = useState(props.initial)

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
    <Button variant="primary" size="md" active onClick={props.onAdd}>
    Comprar
  </Button>
    <p> Has agregado al carrito {contador} producto (s) </p>
   </>
    );
        
    

}

export default ItemCount

