import { Link } from "react-router-dom"

const CartVacio = () => {

    return (
        <div className="container my-5">
            <h2>Tu carrito está vacío</h2>
            <hr/>
            <p>Por favor, agrega productos para continuar.</p>

            <Link to="/categorias" className="btn btn-primary m-3">Ver productos disponibles</Link>
            <Link to="/" className="btn btn-primary m-3">Volver al Home</Link>
        </div>
    )
}

export default CartVacio