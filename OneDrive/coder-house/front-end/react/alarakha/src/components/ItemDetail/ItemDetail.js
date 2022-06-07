import './ItemDetail.scss'

const ItemDetail = ({item}) => {


    return (
        <div className="container my-5">
            <h2 className="nombreProducto">{item.nombre}</h2>
            <img className='my-3 w-25' src={item.img} alt={item.nombre}/>
            <h4 className='my-3'>Precio: ${item.precio}</h4>
        </div>
    )
}

export default ItemDetail