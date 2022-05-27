import CartWidget from '../CartWidget/CartWidget'
import './navbar.scss'

const Navbar = () => {
    return (
    <header className="header">
        <div className="header_container">
            <h1>Alarakha neceseres</h1>
            {/* <img src="../../multimedia/images/general/logo.png" alt="Logo"/> */}
            <nav className="header_container_navbar">
                <p>Catálogo</p>
                <p>Contacto</p>
                <p>Medios de Pago</p>
                <p>Ventas al por mayor</p>
                <p>InstaTips</p>
                <CartWidget/>
            </nav>
        </div>
        <hr/>
    </header>
    )
}

export default Navbar