import './ItemCount.scss'

const ItemCount = ({max, contador, setContador, agregado}) => {


    const incrementar = () => {
        if (contador>=max){
            setContador(contador)
            alert("Máximo de stock alcanzado")
        } else {
            setContador( contador + 1 )
        }
    }
    const reducir = () => {
        contador>1 && setContador( contador - 1 )
    }
    
    return(
        <div className="container mt-4">

            <div className="container_counter">
                <button className="btn btn-unline-primary" onClick={reducir}>-</button>
                <p>{contador}</p>
                <button className="btn btn-primary" onClick={incrementar}>+</button>
            </div>

            <button className="btn btn-success" onClick={agregado}>Agregar al carrito</button>
            <br/>
        </div>
    )
}

export default ItemCount