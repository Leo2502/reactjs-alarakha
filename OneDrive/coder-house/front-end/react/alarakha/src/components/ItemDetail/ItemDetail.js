import ItemCount from '../ItemCount/ItemCount'
import './ItemDetail.scss'
import { useNavigate, Link } from "react-router-dom"
import { useState, useContext } from 'react'
import { ContextoCarrito } from "../../context/CartContext"

const ItemDetail = ({item}) => {

    const navigate = useNavigate()

    const [cantidad, setCantidad] = useState(0)

    const {carrito, enCarrito, setCart, cantidadEnCarrito} = useContext(ContextoCarrito)

    const handleAtras = () => {
        navigate(-1)
    }

    const agregado = () => {
        cantidad>0 && alert(`Agregaste ${cantidad} unidades del ${item.nombre} al carrito!`)
        if (enCarrito(item.id)){
            const buscarProducto = carrito.map(producto=>{
                if(producto.id===item.id){
                    producto.cantidad=producto.cantidad+cantidad;
                    item.stock=item.stock-producto.cantidad
                    return producto;
                } else {
                    return producto;
                }
            })
            setCart([...buscarProducto])
        } else {
            const alCarrito = {
                ...item,
                cantidad
            }
            item.stock=item.stock-cantidad
            setCart([...carrito, alCarrito])
        }
        setCantidad(0)
        console.log(cantidadEnCarrito()) 
    }

    return (
        <div className="container my-5">
            <h2 className="nombreProducto">{item.nombre}</h2>
            <img className='my-3 w-25' src={item.img} alt={item.nombre}/>
            <p className='my-3'>{item.description}</p>
            <h4 className='my-3'>Precio: ${item.precio}</h4>

            {
                enCarrito(item.id) ?
                <Link to={'/cart'} className="btn btn-success my-3">Terminar compra</Link> :
                <ItemCount 
                max={item.stock}
                contador={cantidad}
                setContador={setCantidad}
                nombre={item.nombre}
                agregado={agregado}
                id={item.id}/>
            }
                
            <br/>
            <button className='btn btn-primary my-3' onClick={handleAtras}>Volver</button>
        </div>
    )
}

export default ItemDetail