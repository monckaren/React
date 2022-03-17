import { Link } from "react-router-dom"
import CartWidget from './CartWidget'


function NavBar() {
    return <header id="header">
        <Link to="/" className="titulo">E-COMMERCE</Link>
        <nav>
        <Link to="productos">Productos</Link>
        <Link to="sale">SALE</Link>
        <Link to="contacto">Contacto</Link>
        
        </nav>
        <>
        <CartWidget/>
        </>
        
    </header>
}

export default NavBar