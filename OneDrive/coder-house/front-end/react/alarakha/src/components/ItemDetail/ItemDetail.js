import ItemCount from '../ItemCount/ItemCount'
import './ItemDetail.scss'
import { useNavigate } from "react-router-dom"

const ItemDetail = ({item}) => {

    const navigate = useNavigate()

    const handleAtras = () => {
        navigate(-1)
    }

    return (
        <div className="container my-5">
            <h2 className="nombreProducto">{item.nombre}</h2>
            <img className='my-3 w-25' src={item.img} alt={item.nombre}/>
            <p className='my-3'>{item.description}</p>
            <h4 className='my-3'>Precio: ${item.precio}</h4>
            <ItemCount item={item}/>
            <button className='btn btn-primary my-3' onClick={handleAtras}>VOLVER</button>
        </div>
    )
}

export default ItemDetail