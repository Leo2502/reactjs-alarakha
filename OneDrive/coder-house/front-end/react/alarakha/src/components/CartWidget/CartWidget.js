import { BsFillCartFill } from 'react-icons/bs'
import { Link } from 'react-router-dom'

const CartWidget = () => {
    return(
        <Link to={'/cart'} className="enlace"><BsFillCartFill/> Carrito</Link>
    )
}

export default CartWidget