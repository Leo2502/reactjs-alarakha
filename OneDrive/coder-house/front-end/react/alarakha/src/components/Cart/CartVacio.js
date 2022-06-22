import { Link } from "react-router-dom"

const CartVacio = () => {

    return (
        <div className="container my-5">
            <h2>Tu carrito está vacío</h2>
            <hr/>
            <p>Por favor, agrega productos para continuar.</p>

            <Link to="/" className="btn btn-primary">Ver productos disponibles</Link>
        </div>
    )
}

export default CartVacio