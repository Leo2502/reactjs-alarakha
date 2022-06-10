import CartWidget from '../CartWidget/CartWidget'
// import { AiOutlineInstagram } from 'react-icons/ai'
import 'bootstrap/dist/css/bootstrap.min.css';
import './navbar.scss'
import {Navbar, Container, Nav, NavDropdown} from 'react-bootstrap';
import { Link } from 'react-router-dom'

const NavbarComp = () => {
    return (
    <header className="header">
        <Navbar bg="light" expand="lg">
            <Container className='header_container d-flex justify-content-around'>
                <Navbar.Brand className='w-25 p-3'><Link to={"/"}><img src='../assets/multimedia/images/general/logo.png' alt="logo" width="100%"/></Link></Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                    <NavDropdown className='enlace' title="Catálogo" id="basic-nav-dropdown">
                        <NavDropdown.Item className='enlace'><Link to={'categoria/brocheros'}>Brocheros</Link></NavDropdown.Item>
                        <NavDropdown.Item className='enlace'><Link to={'categoria/carteras'}>Carteras</Link></NavDropdown.Item>
                        <NavDropdown.Item className='enlace'><Link to={'categoria/mochilas'}>Mochilas</Link></NavDropdown.Item>
                        <NavDropdown.Item className='enlace'><Link to={'categoria/neceseres'}>Neceseres</Link></NavDropdown.Item>
                        <NavDropdown.Item className='enlace'><Link to={'categoria/portatodo'}>Portatodo</Link></NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item className='enlace'><Link to={'/'}>Ver todo</Link></NavDropdown.Item>
                    </NavDropdown>
                    <Link to={"/contacto"} className="header__navlink enlace">Contacto</Link>
                    <Link to={"/cart"} className='enlace'><CartWidget/></Link>
                </Nav>
                </Navbar.Collapse>
            </Container>
            </Navbar>
    </header>
    )
}

export default NavbarComp