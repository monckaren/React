import { Link } from "react-router-dom"
import CartWidget from './CartWidget'



function NavBar() {
    return <header id="header">
        <Link to="/" className="titulo">E-COMMERCE</Link>
        <nav>
        <Link to="/productos">Productos</Link>
        <Link to="/categorias/sale">SALE</Link>
        <Link to="/item/contacto">Contacto</Link>
        <Link to="/Carrito">{<CartWidget/>}</Link>
        
        </nav>
        <>
      
        </>
        
    </header>
}

export default NavBar