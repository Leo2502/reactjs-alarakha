import ItemCount from "../ItemCount/ItemCount"
import './Item.scss'

const Item = ({item}) => {

    return (
        <div>
            <h2 className="mb-3 nombreProducto">{item.nombre}_{item.id}</h2>
            <img src={item.img} alt={item.nombre} width="25%"/>
            <h4 className="mt-3">Precio: ${item.precio}</h4>
            <ItemCount item={item}/>
            <hr/>
        </div>
    )
}

export default Item