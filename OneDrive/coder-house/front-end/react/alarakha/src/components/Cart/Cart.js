import { useCartContext } from "../../context/CartContext"
import { BsTrash } from "react-icons/bs"
import './Cart.scss'
import { Link } from 'react-router-dom'
import CartVacio from './CartVacio'

const Cart = () => {

    const {carrito, totalCarrito, vaciarCarrito, eliminarItem} = useCartContext()

    if (carrito.length === 0) return <CartVacio/>   

    return (
        <div className="container my-5">
            <h2>Resumen de su compra:</h2>
            <hr/>

            {   
                carrito.map((item) => (
                <div key={item.id} className="my-2">
                    <h5 className="nombreProducto">{item.nombre}</h5>
                    <p>Cantidad: {item.cantidad}</p>
                    <h6>Precio: ${item.precio * item.cantidad}</h6>
                    <button onClick={() => eliminarItem(item.id)} className="btn btn-danger"><BsTrash/></button>
                    <hr/>
                </div>
                ))
            }


            <h4>Total a pagar: ${totalCarrito()}</h4>

            <button onClick={vaciarCarrito} className="btn btn-danger">Vaciar carrito</button>
            <Link to="/"><button className="btn btn-primary m-5">Continuar comprando</button></Link>
        </div>
    )
}

export default Cart