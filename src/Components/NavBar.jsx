import { Link } from "react-router-dom"
import CartWidget from './CartWidget'



function NavBar() {
    return <header id="header">
        <Link to="/" className="titulo">E-COMMERCE</Link>
        <nav>
        <Link to="/categorias/productos">Productos</Link>
        <Link to="/Sale">SALE</Link>
        <Link to="/item/productosDestacados">Destacados</Link>
        <Link to="/Carrito">{<CartWidget/>}</Link>
        
        </nav>
        <>
      
        </>
        
    </header>
}

export default NavBar