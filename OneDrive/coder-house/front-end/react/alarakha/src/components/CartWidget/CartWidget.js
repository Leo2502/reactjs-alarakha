import { BsFillCartFill } from 'react-icons/bs'
import { Link } from 'react-router-dom'
import { useCartContext } from '../../context/CartContext'

const CartWidget = () => {

    const {cantidadEnCarrito} = useCartContext()

    return(
        <Link to={'/cart'} className="enlace"><BsFillCartFill/>
        <span>{cantidadEnCarrito()}</span></Link>
    )
}

export default CartWidget