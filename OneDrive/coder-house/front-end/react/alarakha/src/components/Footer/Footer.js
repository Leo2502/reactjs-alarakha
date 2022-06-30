import './Footer.scss'

const Footer = () => {
    return(
        <footer>
        <div className="menu__footer">
        {/* <!--Sección sobre la tienda--> */}
        <div className="menu__footer__item">
        <h4 className="menu__footer__item__title fs-5">Tienda</h4>
        <ul className="m-0 mb-4 p-0">
            <li>Contacto</li>
            <li>Medios de Pago</li>
            <li>Cambios y devoluciones</li>
            <li>Sobre envíos</li>
        </ul>
        </div>
        {/* <!--Fin de Sección sobre la tienda--> */}


        {/* <!--Sección Sobre Nosotros--> */}
        <div className="menu__footer__item">
        <h4 className="menu__footer__item__title fs-5">Sobre Nosotros</h4>
        <ul className="m-0 mb-4 p-0">
            <li>Nuestra Historia</li>
            <li>Bio</li>
            <li>Producción</li>
        </ul>
        </div>
        {/* <!--Fin de Sección Sobre Nosotros--> */}

        
        {/* <!--Sección Redes Sociales y contacto--> */}
        <div className="menu__footer__item menu__footer__item--redes">
        <div>
        {/* <!--Botón de Instagram--> */}
        <a className="menu__footer__item__iconos display-5 mb-0" href="https://www.instagram.com/alarakha.neceseres/" target="_blank" rel="noopener noreferrer">Instagram</a>
        {/* <!--Botón de Facebook--> */}
        <a className="menu__footer__item__iconos display-5 mb-0" href="https://www.facebook.com/alarakhaneceseres" target="_blank" rel="noopener noreferrer">Facebook</a>
        </div>
        <div className="menu__footer__item--contacto">
          {/* <!-- Botón de Enviar Correo --> */}
          <a href="mailto:alarakha.neceseres@hotmail.com">Correo</a>
          {/* <!-- Botón de Ubicación --> */}
          <a href="https://www.google.com/maps/place/Caseros,+Provincia+de+Buenos+Aires/@-34.6097924,-58.5811922,14z/data=!3m1!4b1!4m5!3m4!1s0x95bcb8698cab7fa3:0xc4d83fe138c75b6f!8m2!3d-34.6094827!4d-58.5634631" target="_blank" rel="noopener noreferrer">Map</a>
          {/* <!-- Botón de Enviar WhatsApp --> */}
          <a href="https://wa.me/+5491162488937?text=Hola,%20quería%20consultar%20por%20" className="whatsapp" target="_blank" rel="noopener noreferrer">WhatsApp</a>
        </div>
        </div>
        {/* <!-- Fin de Sección Redes Sociales y contacto --> */}


        {/* <!-- Botón subir a inicio --> */}
        <a className="menu__footer__item--flecha-header fa-arrow-circle-up" data-aos="fade-up" href="#">Flecha</a>
    </div>
    <div>
        <img className="footer__logo" src="../assets/multimedia/images/general/logo.png" alt="logo-Alarakha"/>
        <p className="footer__copyrigth mb-0">© Alarakha - 2021 </p>
        <p className="footer__copyrigth mb-0">Diseñado por Leonel Sollazzo </p>
    </div>
  </footer>
    )
}

export default Footer