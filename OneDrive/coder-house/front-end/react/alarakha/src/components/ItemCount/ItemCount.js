import { useState } from "react"
import './ItemCount.scss'

const ItemCount = ({item}) => {

    const [contador, setContador] = useState(0)
    const incrementar = () => {
        if (contador>item.stock){
            setContador(contador)
            alert("Máximo de stock alcanzado")
        } else {
            setContador( contador + 1 )
        }
    }
    const reducir = () => {
        contador>1 && setContador( contador - 1 )
    }

    const agregado = () => {
        contador>0 && alert(`Agregaste ${contador} unidades del ${item.nombre} al carrito!`)
        setContador( contador - contador )
        item.stock=item.stock-contador
    }
    
    return(
        <div className="container mt-4">
            <div className="container_counter">
                <button className="btn btn-unline-primary" onClick={reducir}>-</button>
                <p>{contador}</p>
                <button className="btn btn-primary" onClick={incrementar}>+</button>
            </div>
            <button className="btn btn-success" onClick={agregado}>Agregar al Carrito</button>
        </div>
    )
}

export default ItemCount