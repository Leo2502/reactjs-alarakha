import ItemCount from '../ItemCount/ItemCount'
import './ItemDetail.scss'
import { useNavigate, Link } from "react-router-dom"
import { useState } from 'react'

const ItemDetail = ({item}) => {

    const navigate = useNavigate()

    const [cantidad, setCantidad] = useState(0)

    const [included, setIncluded] = useState(false)

    const handleAtras = () => {
        navigate(-1)
    }

    const agregado = () => {
        cantidad>0 && alert(`Agregaste ${cantidad} unidades del ${item.nombre} al carrito!`)
        const alCarrito = {
            ...item,
            cantidad
        }
        setIncluded(true)
        setCantidad(0)
        item.stock=item.stock-cantidad
        console.log(alCarrito)
    }

    return (
        <div className="container my-5">
            <h2 className="nombreProducto">{item.nombre}</h2>
            <img className='my-3 w-25' src={item.img} alt={item.nombre}/>
            <p className='my-3'>{item.description}</p>
            <h4 className='my-3'>Precio: ${item.precio}</h4>
            { !included &&
                <ItemCount 
                max={item.stock}
                contador={cantidad}
                setContador={setCantidad}
                nombre={item.nombre}
                agregado={agregado}/>
            }
            <Link to={'/cart'} className="btn btn-success my-3">Terminar compra</Link>
            <br/>
            <button className='btn btn-primary my-3' onClick={handleAtras}>VOLVER</button>
        </div>
    )
}

export default ItemDetail