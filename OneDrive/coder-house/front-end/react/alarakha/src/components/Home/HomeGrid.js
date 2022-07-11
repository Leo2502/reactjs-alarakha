import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Link } from "react-router-dom"
import './HomeGrid.scss'

const HomeGrid = () => {
    return (
        <Container className='w-100'>
          <Row className='gap-0'>
            <Col sm className='container-fluid__row__producto w-100 mt-1 mb-1'>
              <Link to={'categoria/brocheros'} className="d-none d-md-block"><img src='../assets/multimedia/images/general/brocheros-p.jpg' alt="Brochero-Portada" className='w-100'></img></Link>
              <Link to={'categoria/brocheros'} className="d-block d-md-none"><img data-aos="fade-up" src='../assets/multimedia/images/general/brocheros-p.jpg' alt="Brochero-Portada" className='img-fluid w-100'></img></Link>
            </Col>
            <Col sm className='container-fluid__row__producto w-100 mt-1 mb-1'>
              <Link to={'categoria/carteras'} className="d-none d-md-block"><img src='../assets/multimedia/images/general/carteras-p.jpg' alt="Carteras-Portada" className='w-100'></img></Link>
              <Link to={'categoria/carteras'} className="d-block d-md-none"><img data-aos="fade-up" src='../assets/multimedia/images/general/carteras-p.jpg' alt="Carteras-Portada" className='img-fluid w-100'></img></Link>
            </Col>
          </Row>
          <Row className='gap-0'>
            <Col sm className='container-fluid__row__producto w-100 mt-1 mb-1'>
              <Link to={'categoria/mochilas'} className="d-none d-md-block"><img src='../assets/multimedia/images/general/mochilas-p.jpg' alt="Mochilas-Portada" className='w-100'></img></Link>
              <Link to={'categoria/mochilas'} className="d-block d-md-none"><img data-aos="fade-up" src='../assets/multimedia/images/general/mochilas-p.jpg' alt="Mochilas-Portada" className='img-fluid w-100'></img></Link>
            </Col>
            <Col sm className='container-fluid__row__producto w-100 mt-1 mb-1'>
              <Link to={'categoria/neceseres'} className="d-none d-md-block"><img src='../assets/multimedia/images/general/neceseres-p.jpg' alt="Neceseres-Portada" className='w-100'></img></Link>
              <Link to={'categoria/neceseres'} className="d-block d-md-none"><img data-aos="fade-up" src='../assets/multimedia/images/general/neceseres-p.jpg' alt="Neceseres-Portada" className='img-fluid w-100'></img></Link>
            </Col>
          </Row>
        </Container>
      );
}

export default HomeGrid