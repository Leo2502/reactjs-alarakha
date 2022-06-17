import './Item.scss'
import { Link } from "react-router-dom"

const Item = ({item}) => {

    // const handleVerMas = () => {

    // }

    return (
        <div className='producto_container'>
            <h2 className="mb-3 nombreProducto">{item.nombre}</h2>
            <img src={item.img} alt={item.nombre} width="25%"/>
            <h4 className="mt-3">Precio: ${item.precio}</h4>
            <Link to={`/item/${item.id}`}>
                <button className="btn btn-primary my-2">Ver más</button>
            </Link>
            <hr/>
        </div>
    )
}

export default Item