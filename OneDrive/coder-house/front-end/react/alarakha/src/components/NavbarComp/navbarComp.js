import CartWidget from '../CartWidget/CartWidget'
// import { AiOutlineInstagram } from 'react-icons/ai'
import 'bootstrap/dist/css/bootstrap.min.css';
import './navbar.scss'
import {Navbar, Container, Nav, NavDropdown} from 'react-bootstrap';
import { Link } from 'react-router-dom'

const NavbarComp = () => {
    return (
    <header data-aos="fade-down">
        <Navbar className='header_container_navbar bg-leo' expand="lg">
            <Container className='d-flex justify-content-between'>
                <Navbar.Brand className='navbar__logo animate__animated animate__bounce'><Link to={"/"}><img src='../assets/multimedia/images/general/logo.png' alt="logo" className='w-100'/></Link></Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="header_container_navbar--links__container">
                    <NavDropdown className='enlace' title="Catálogo" id="basic-nav-dropdown">
                        <NavDropdown.Item><Link to={'categoria/brocheros'} className='enlace'>Brocheros</Link></NavDropdown.Item>
                        <NavDropdown.Item><Link to={'categoria/carteras'} className='enlace'>Carteras</Link></NavDropdown.Item>
                        <NavDropdown.Item><Link to={'categoria/mochilas'} className='enlace'>Mochilas</Link></NavDropdown.Item>
                        <NavDropdown.Item><Link to={'categoria/neceseres'} className='enlace'>Neceseres</Link></NavDropdown.Item>
                        <NavDropdown.Item><Link to={'categoria/portatodo'} className='enlace'>Portatodo</Link></NavDropdown.Item>
                        <NavDropdown.Divider/>
                        <NavDropdown.Item><Link to={'/'} className='enlace'>Ver todo</Link></NavDropdown.Item>
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