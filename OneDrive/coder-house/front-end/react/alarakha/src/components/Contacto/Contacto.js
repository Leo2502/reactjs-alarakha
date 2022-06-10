import './Contacto.scss'
import { AiOutlineWhatsApp } from 'react-icons/ai'
import { AiOutlineMail } from 'react-icons/ai'

const Contacto = () => {

    return (
        <div className="contactos__container__item my-5">
        <h3>Contactanos!</h3>
            <ul>
                <li className="mb-3"><a href="https://wa.me/+5491162488937?text=Hola,%20quería%20consultar%20por%20" className="whatsapp" target="blank"><AiOutlineWhatsApp/></a> +54-911-624-889-37</li>
                <li><a href="mailto:alarakha.neceseres@hotmail.com"><AiOutlineMail/></a> alarakha.neceseres@hotmail.com</li>
            </ul>
        </div>
    )
}

export default Contacto