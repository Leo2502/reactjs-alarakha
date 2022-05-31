import { useState } from "react"
import './ItemCount.scss'

const ItemCount = () => {

    const [contador, setContador] = useState(0)
    const incrementar = () => {
        if (contador>7){
            setContador(contador)
        } else {
            setContador( contador + 1 )
        }
    }
    const reducir = () => {
        if (contador<1){
            setContador(contador)
        } else {
            setContador( contador - 1 )
        }
    }

    const agregado = () => {
        if (contador>0){
            alert("Producto agregado al carrito")
        }
    }
    
    return(
        <div className="container my-5">
            <p>Cantidad</p>
            <div className="container_counter">
                <button className="btn btn-danger" onClick={reducir}>-</button>
                <p>{contador}</p>
                <button className="btn btn-success" onClick={incrementar}>+</button>
            </div>
            <button className="btn btn-primary" onClick={agregado}>Agregar al Carrito</button>
        </div>
    )
}

export default ItemCount