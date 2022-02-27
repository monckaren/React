import {} from 'react-bootstrap'
import CartWidget from './CartWidget'


function NavBar() {
    return <header id="header">
        <h1>E-COMMERCE</h1>
        <nav>
        <a href="">Productos</a>
        <a href="">SALE</a>
        <a href="">Contacto</a>
        
        </nav>
        <>
        <CartWidget/>
        </>
        
    </header>
}

export default NavBar