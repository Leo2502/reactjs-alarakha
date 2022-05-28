import CartWidget from '../CartWidget/CartWidget'
import 'bootstrap/dist/css/bootstrap.min.css';
import './navbar.scss'
import {Navbar, Container, Nav, NavDropdown} from 'react-bootstrap';

const NavbarComp = () => {
    return (
    <header className="header">
        {/* <div className="header_container">
            <h1>Alarakha neceseres</h1>
            <img src="../../multimedia/images/general/logo.png" alt="Logo"/>
            <nav className="header_container_navbar">
                <p>Catálogo</p>
                <p>Contacto</p>
                <p>Medios de Pago</p>
                <p>Ventas al por mayor</p>
                <p>InstaTips</p>
                <CartWidget/>
            </nav>
        </div> */}
        <Navbar bg="light" expand="lg">
            <Container>
                <Navbar.Brand href="#home">Alarakha neceseres</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                    <NavDropdown title="Catálogo" id="basic-nav-dropdown">
                        <NavDropdown.Item href="#action/3.1">Brocheros</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.2">Carteras</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.3">Mochilas</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.3">Neceseres</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.3">Portatodo</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="#action/3.4">Ver Todo</NavDropdown.Item>
                    </NavDropdown>
                    <Nav.Link href="#home">Contacto</Nav.Link>
                    <Nav.Link href="#home">Medios de Pago</Nav.Link>
                    <Nav.Link href="#home">Ventas al por mayor</Nav.Link>
                    <Nav.Link href="#home">InstaTips</Nav.Link>
                    <Nav.Link href="#link"><CartWidget/></Nav.Link>
                </Nav>
                </Navbar.Collapse>
            </Container>
            </Navbar>
        <hr/>
    </header>
    )
}

export default NavbarComp